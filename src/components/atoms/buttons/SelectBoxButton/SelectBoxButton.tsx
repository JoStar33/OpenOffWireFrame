import { Text, TouchableOpacity } from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import { selectBoxButtonStyles } from './SelectBoxButton.style';


interface Props {
  handleClick: () => void;
  selectedInfo: string;
  clicked: boolean;
};

//셀렉트 박스 오픈을 돕는 버튼.
const SelectBoxButton = ({handleClick, selectedInfo, clicked}: Props) => {
  return (
    <TouchableOpacity
      style={selectBoxButtonStyles.container}
      onPress={handleClick}>
      <Text style={selectBoxButtonStyles.selectedText}>
        {!selectedInfo ? 'SelectInfo' : selectedInfo}
      </Text>
      {clicked ? (
        <AntDesignIcon name='up' size={20}/>
      ) : (
        <AntDesignIcon name='down' size={20}/>
      )}
    </TouchableOpacity>

  );
};

export default SelectBoxButton;