import {
    faShoppingCart,
    faCheckCircle,
    faTimesCircle
} from '@fortawesome/free-solid-svg-icons';
import {library} from "@fortawesome/fontawesome-svg-core";

const Icons = () => {
    return library.add(
            faShoppingCart,
            faCheckCircle,
            faTimesCircle
        );
};

export default Icons;