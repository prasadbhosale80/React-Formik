import CheckBox from "./CheckBox";
import Date from "./Date";
import Input from "./Input";
import Radio from "./Radio";
import Select from "./Select";

function FormControl(props:any) {
    const {control ,...rest}=props;
    switch (control) {
        case 'input':
            return <Input {...rest}/>
        case 'textarea':
            return <Input as="textarea" {...rest}/>
        case 'select':
            return <Select {...rest}/>
        case 'radio':
            return <Radio {...rest}/>
        case 'checkbox':
            return <CheckBox {...rest}/>
        case 'date':
            return <Date {...rest}/>

        default:
            return null;
    }
}

export default FormControl
