import { FormattedMessage } from 'react-intl'
import franceFlag from '../../assets/img/france.png'
import ukFlag from '../../assets/img/uk.png'
import { useAppDispatch, useAppSelector } from '../../redux'
import { changeLanguage } from '../../redux/slices/app-slice'

const LanguageToggle = () => {

    const { language } = useAppSelector(state => state.app)
    const dispatch = useAppDispatch()

    const toggleLanguage = () => {
        if (language === 'fr')
            dispatch(changeLanguage('en'))
        if (language === 'en')
            dispatch(changeLanguage('fr'))
    }


    return (
        <div className='pointer d-flex align-items-center' onClick={() => toggleLanguage()}>
            {language === 'fr' && <div>
                <img src={franceFlag} height='25px' width='25px' />
            </div>}
            {language === 'en' && <img src={ukFlag} height='25px' width='25px' />}
            <p className='m-0 mx-1'><FormattedMessage id='message.changeLanguage' /></p>

        </div>
    )
}

export default LanguageToggle
