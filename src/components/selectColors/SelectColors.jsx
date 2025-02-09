import Select from 'react-select';
import './selectColors.scss';
import { colorOptions } from '../../colorOptions';

const SelectColors = ({ selectedColors, setSelectedColors, maxSelections = 3 }) => {
    const handleColorChange = (selectedOption) => {
        if (selectedColors.length >= maxSelections) {
            alert(`You can only select up to ${maxSelections} colors.`);
            return;
        }

        if (!selectedColors.some((color) => color.value === selectedOption.value)) {
            setSelectedColors([...selectedColors, selectedOption]);
        }
    };

    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.data.value,
            cursor: 'none',
        }),
        control: (provided) => ({
            ...provided,
            outline: 'none',
            boxShadow: 'none',
            cursor: 'default',
        }),
    };

    return (
        <div>
            <Select
                id="selectColors"
                className="form-select"
                classNamePrefix="react-select"
                placeholder={`Select up to ${maxSelections} colors`}
                onChange={handleColorChange}
                options={colorOptions}
                styles={customStyles}
                closeMenuOnSelect={false}
                isOptionDisabled={() => selectedColors.length >= maxSelections}
            />
        </div>
    );
};

export default SelectColors;
