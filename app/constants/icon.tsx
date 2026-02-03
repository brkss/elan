import Feather from "@expo/vector-icons/Feather";

export const icon = {
  index: (props: any) => <Feather name="home" size={22} {...props} />,
  product: (props: any) => (
    <Feather name="shopping-cart" size={22} {...props} />
  ),
  profile: (props: any) => <Feather name="user" size={22} {...props} />,
};
