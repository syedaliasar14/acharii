import { useState, useEffect } from "react";
import { Address, AddressErrors } from "../types";

interface ShippingAddressProps {
  address: Address;
  setAddress: (address: Address) => void;
  visible: boolean;
  addressErrors: AddressErrors;
  setAddressErrors: (errors: AddressErrors) => void;
}

export default function ShippingAddress({ address, setAddress, visible, addressErrors, setAddressErrors }: ShippingAddressProps) {
  const [isVisible, setIsVisible] = useState(visible);

  useEffect(() => {
    setIsVisible(visible);
  }, [visible]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAddress({ ...address, [name]: value });
    setAddressErrors({ ...addressErrors, [name]: false });
  };

  const handleCheckChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setAddress({ ...address, [name]: checked });
  };

  return (
    <div className={`w-full transition-height duration-1500 ease-out overflow-hidden ${isVisible ? 'max-h-full' : 'max-h-0'}`}>
      <h2 className="text-2xl mb-4">Shipping Address</h2>
      <form className="flex flex-col">
        <input
          type="text"
          name="name"
          value={address.name}
          onChange={handleChange}
          placeholder="name"
          className={`input ${addressErrors.name && 'bg-primary/20'} rounded-t-lg`}
        />
        <input
          type="text"
          name="street"
          value={address.street}
          onChange={handleChange}
          placeholder="street"
          className={`input ${addressErrors.street && 'bg-primary/20'}`}
        />
        <input
          type="text"
          name="street2"
          value={address.street2}
          onChange={handleChange}
          placeholder="street line 2"
          className={`input`}
        />
        <input
          type="text"
          name="city"
          value={address.city}
          onChange={handleChange}
          placeholder="city"
          className={`input ${addressErrors.city && 'bg-primary/20'}`}
        />
        <div className="flex-row w-full">
          <input
            maxLength={2}
            type="text"
            name="state"
            value={address.state}
            onChange={handleChange}
            placeholder="state"
            className={`input ${addressErrors.state && 'bg-primary/20'} w-1/2 rounded-bl-lg`}
          />
          <input
            type="text"
            name="zip"
            value={address.zip}
            onChange={handleChange}
            placeholder="zip"
            className={`input ${addressErrors.zip && 'bg-primary/20'} w-1/2 rounded-br-lg`}
          />
        </div>
        {address.state.toUpperCase() === 'CT' && (
          <div className="mt-4 flex flex-row items-center rounded-md border-2 border-secondary/60 p-2 gap-3 bg-secondary/10">
            <label className="flex items-center justify-center">
              <input
                type="checkbox"
                name="localDelivery"
                checked={address.localDelivery}
                onChange={handleCheckChange}
                className="mr-2 size-4 accent-secondary"
              />
              Local delivery/pickup (free)
            </label>
          </div>
        )}
      </form>
    </div>
  );
}