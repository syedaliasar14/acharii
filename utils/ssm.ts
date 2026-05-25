import { GetParameterCommand, SSMClient } from "@aws-sdk/client-ssm";

type GetSsmOptions = {
  withDecryption?: boolean;
  forceRefresh?: boolean;
};

type GetEnvOrSsmOptions = {
  parameterName?: string;
  withDecryption?: boolean;
  forceRefresh?: boolean;
};

const ssmClient = new SSMClient({ region: process.env.AWS_REGION || "us-east-1" });
const parameterCache = new Map<string, string>();

const parameterPrefix = "/acharii";

export async function getSsmParameter(name: string, options: GetSsmOptions = {}): Promise<string> {
  const withDecryption = options.withDecryption ?? true;

  if (!options.forceRefresh && parameterCache.has(name)) {
    return parameterCache.get(name)!;
  }

  const result = await ssmClient.send(
    new GetParameterCommand({
      Name: name,
      WithDecryption: withDecryption,
    })
  );

  const value = result.Parameter?.Value;
  if (!value) {
    throw new Error(`Could not load ${name} from AWS SSM Parameter Store`);
  }

  parameterCache.set(name, value);
  return value;
};

export async function getEnvOrSsm(envKey: string, options: GetEnvOrSsmOptions = {}): Promise<string> {
  const envValue = process.env[envKey];
  if (envValue && !options.forceRefresh) {
    return envValue;
  }

  const parameterName = options.parameterName || `${parameterPrefix}/${envKey}`;
  const value = await getSsmParameter(parameterName, {
    withDecryption: options.withDecryption,
    forceRefresh: options.forceRefresh,
  });

  process.env[envKey] = value;
  return value;
};
