import ProduListComponent from "@/src/components/ProductListComponent";
import React from "react";
import { View } from "react-native";

// interface ScreenType {
//   type: "home" | "order" | "cancelled";
// }
export default function HomeScreen() {
  // const [currentScreen, setCurrentScreen] = useState<ScreenType>({
  //   type: "home",
  // });

  // // const handleScreenChange = (screen: ScreenType) => {
  // //   setCurrentScreen(screen);
  // // };

  // // const renderItem = () => {
  // //   switch(currentScreen.type) {
  // //     case 'order':
  // //       return <Text>Order</Text>
  // //     case 'cancelled':
  // //       return <Text>Cancelled</Text>
  // //   }
  // // }
  return (
    <>
      <View style={{ marginTop: 30 }}>
        {/* {renderItem()} */}
        <ProduListComponent />
      </View>
    </>
  );
}
