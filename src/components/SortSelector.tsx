import { Button, Menu, MenuButton, MenuItem, MenuList  ,} from "@chakra-ui/react";

import { BsChevronDown } from "react-icons/bs";

interface Props{
    onSelectSortOrder:(sortOrder:string) => void;
    sortOrders :string
}

const SortSelector = ( {onSelectSortOrder,sortOrders} :Props) => {
  
const SortSelector=[
    {value:"",label:"Relevance"},
    {value:"-added",label:"Date added"},
    {value:"name",label:"Name"},
    {value:"-released",label:"Release date"},
    {value:"-metacritic",label:"Popularity"},
    {value:"-rating",label:"Avrage rating"},
];
const currentSortOrder = SortSelector.find((order: { value: string; })=> order.value === sortOrders)


  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order By  {currentSortOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
      {SortSelector.map(order => <MenuItem onClick={() => onSelectSortOrder(order.value)} key={order.value} value={order.value}>{order.label}</MenuItem>)}

      </MenuList>
    </Menu>
  );
};

export default SortSelector;
