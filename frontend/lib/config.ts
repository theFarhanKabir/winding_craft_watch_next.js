/** Owner-editable launch configuration. Null means the value has not been confirmed. */
export const mockConfig = {
  accent: "#879399", // restrained brushed-steel tone
  deliveryChargeBdt: null as number | null,
  polishAddOnBdt: null as number | null,
  polishExtraDeliveryDays: null as number | null,
  quartzServiceBdt: null as number | null,
  automaticServiceBdt: null as number | null,
  contact: { phone: null as string | null, email: null as string | null, address: null as string | null },
  social: { instagram: null as string | null, facebook: null as string | null },
} as const;
