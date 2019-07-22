import {
    faStoreAlt,
    faShoppingCart,
    faCheckCircle,
    faTimesCircle
} from '@fortawesome/free-solid-svg-icons';
import {library} from "@fortawesome/fontawesome-svg-core";

const Icons = () => {
    return library.add(
            faStoreAlt,
            faShoppingCart,
            faCheckCircle,
            faTimesCircle
        );
};

export default Icons;