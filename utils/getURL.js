import { useRouter } from 'next/router'
import globals from '../globals';

export default () => {
    const router = useRouter()
    const website = globals.website;
    const route = router.asPath;
    const url = website + route;

    return url;
};
