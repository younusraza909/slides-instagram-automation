type Props = {
  type: "FREE" | "PRO";
  children: React.ReactNode;
};

export const SubscriptionPlan = ({ children, type }: Props) => {
  return children;
};
