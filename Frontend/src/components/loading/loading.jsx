import i18n from '../../118n/menu';
import { useTranslation } from 'react-i18next';




const Loading = ()=>{
    const { t, i18n } = useTranslation();
    return <div>{t('loading:loading')}</div>;
}


export default Loading;