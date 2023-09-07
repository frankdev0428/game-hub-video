import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
interface Props {
  onSelectSortOrder : (sortOrder: string ) => void;
  sortOrder: string,
}
const SortSelector = ({ onSelectSortOrder, sortOrder } : Props) => {
  const sortOrders =[
    { value: '', label: 'Relevance',},
    { value: '-added', label: 'Data added',},
    { value: 'name', label: 'Name',},
    { value: '-released', label: 'Release data',},
    { value: '-metacritic', label: 'Popolarity',},
    { value: '-rating', label: 'Average rating',},
  
  ]
  const currentSortOrder = sortOrders.find(order => order.value === sortOrder);
    return (
        <Menu>
         <MenuButton as={Button} rightIcon={<BsChevronDown />}>
           Order by: {currentSortOrder?.label || 'Relavance'}
         </MenuButton>
         <MenuList>
          {sortOrders.map((order) => (
             <MenuItem key="order.value" onClick={() => onSelectSortOrder(order.value)}>
              {order.label}
              </MenuItem>
          ))}
         </MenuList>
        </Menu>
      )   
}

export default SortSelector