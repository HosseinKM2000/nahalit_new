import { React , useState , useRef } from 'react';
import {BsPersonFill} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { toast , ToastContainer } from 'react-toastify';

function Register() {
  const [Switch,setSwitch] = useState(false);
  const [phoneCode,setPhoneCode] = useState(98);
  const [acceptCode,setAcceptCode] = useState(false);
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const codeRef = useRef();

  const ListOfCountryCodes =  [{"country":"Afghanistan","code":"93","iso":"AF"},
  {"country":"Albania","code":"355","iso":"AL"},
  {"country":"Algeria","code":"213","iso":"DZ"},
  {"country":"American Samoa","code":"1-684","iso":"AS"},
  {"country":"Andorra","code":"376","iso":"AD"},
  {"country":"Angola","code":"244","iso":"AO"},
  {"country":"Anguilla","code":"1-264","iso":"AI"},
  {"country":"Antarctica","code":"672","iso":"AQ"},
  {"country":"Antigua and Barbuda","code":"1-268","iso":"AG"},
  {"country":"Argentina","code":"54","iso":"AR"},
  {"country":"Armenia","code":"374","iso":"AM"},
  {"country":"Aruba","code":"297","iso":"AW"},
  {"country":"Australia","code":"61","iso":"AU"},
  {"country":"Austria","code":"43","iso":"AT"},
  {"country":"Azerbaijan","code":"994","iso":"AZ"},
  {"country":"Bahamas","code":"1-242","iso":"BS"},
  {"country":"Bahrain","code":"973","iso":"BH"},
  {"country":"Bangladesh","code":"880","iso":"BD"},
  {"country":"Barbados","code":"1-246","iso":"BB"},
  {"country":"Belarus","code":"375","iso":"BY"},
  {"country":"Belgium","code":"32","iso":"BE"},
  {"country":"Belize","code":"501","iso":"BZ"},
  {"country":"Benin","code":"229","iso":"BJ"},
  {"country":"Bermuda","code":"1-441","iso":"BM"},
  {"country":"Bhutan","code":"975","iso":"BT"},
  {"country":"Bolivia","code":"591","iso":"BO"},
  {"country":"Bosnia and Herzegovina","code":"387","iso":"BA"},
  {"country":"Botswana","code":"267","iso":"BW"},
  {"country":"Brazil","code":"55","iso":"BR"},
  {"country":"British Indian Ocean Territory","code":"246","iso":"IO"},
  {"country":"British Virgin Islands","code":"1-284","iso":"VG"},
  {"country":"Brunei","code":"673","iso":"BN"},
  {"country":"Bulgaria","code":"359","iso":"BG"},
  {"country":"Burkina Faso","code":"226","iso":"BF"},
  {"country":"Burundi","code":"257","iso":"BI"},
  {"country":"Cambodia","code":"855","iso":"KH"},
  {"country":"Cameroon","code":"237","iso":"CM"},
  {"country":"Canada","code":"1","iso":"CA"},
  {"country":"Cape Verde","code":"238","iso":"CV"},
  {"country":"Cayman Islands","code":"1-345","iso":"KY"},
  {"country":"Central African Republic","code":"236","iso":"CF"},
  {"country":"Chad","code":"235","iso":"TD"},
  {"country":"Chile","code":"56","iso":"CL"},
  {"country":"China","code":"86","iso":"CN"},
  {"country":"Christmas Island","code":"61","iso":"CX"},
  {"country":"Cocos Islands","code":"61","iso":"CC"},
  {"country":"Colombia","code":"57","iso":"CO"},
  {"country":"Comoros","code":"269","iso":"KM"},
  {"country":"Cook Islands","code":"682","iso":"CK"},
  {"country":"Costa Rica","code":"506","iso":"CR"},
  {"country":"Croatia","code":"385","iso":"HR"},
  {"country":"Cuba","code":"53","iso":"CU"},
  {"country":"Curacao","code":"599","iso":"CW"},
  {"country":"Cyprus","code":"357","iso":"CY"},
  {"country":"Czech Republic","code":"420","iso":"CZ"},
  {"country":"Democratic Republic of the Congo","code":"243","iso":"CD"},
  {"country":"Denmark","code":"45","iso":"DK"},
  {"country":"Djibouti","code":"253","iso":"DJ"},
  {"country":"Dominica","code":"1-767","iso":"DM"},
  {"country":"Dominican Republic","code":"1-809, 1-829, 1-849","iso":"DO"},
  {"country":"East Timor","code":"670","iso":"TL"},
  {"country":"Ecuador","code":"593","iso":"EC"},
  {"country":"Egypt","code":"20","iso":"EG"},
  {"country":"El Salvador","code":"503","iso":"SV"},
  {"country":"Equatorial Guinea","code":"240","iso":"GQ"},
  {"country":"Eritrea","code":"291","iso":"ER"},
  {"country":"Estonia","code":"372","iso":"EE"},
  {"country":"Ethiopia","code":"251","iso":"ET"},
  {"country":"Falkland Islands","code":"500","iso":"FK"},
  {"country":"Faroe Islands","code":"298","iso":"FO"},
  {"country":"Fiji","code":"679","iso":"FJ"},
  {"country":"Finland","code":"358","iso":"FI"},
  {"country":"France","code":"33","iso":"FR"},
  {"country":"French Polynesia","code":"689","iso":"PF"},
  {"country":"Gabon","code":"241","iso":"GA"},
  {"country":"Gambia","code":"220","iso":"GM"},
  {"country":"Georgia","code":"995","iso":"GE"},
  {"country":"Germany","code":"49","iso":"DE"},
  {"country":"Ghana","code":"233","iso":"GH"},
  {"country":"Gibraltar","code":"350","iso":"GI"},
  {"country":"Greece","code":"30","iso":"GR"},
  {"country":"Greenland","code":"299","iso":"GL"},
  {"country":"Grenada","code":"1-473","iso":"GD"},
  {"country":"Guam","code":"1-671","iso":"GU"},
  {"country":"Guatemala","code":"502","iso":"GT"},
  {"country":"Guernsey","code":"44-1481","iso":"GG"},
  {"country":"Guinea","code":"224","iso":"GN"},
  {"country":"Guinea-Bissau","code":"245","iso":"GW"},
  {"country":"Guyana","code":"592","iso":"GY"},
  {"country":"Haiti","code":"509","iso":"HT"},
  {"country":"Honduras","code":"504","iso":"HN"},
  {"country":"Hong Kong","code":"852","iso":"HK"},
  {"country":"Hungary","code":"36","iso":"HU"},
  {"country":"Iceland","code":"354","iso":"IS"},
  {"country":"India","code":"91","iso":"IN"},
  {"country":"Indonesia","code":"62","iso":"ID"},
  {"country":"Iran","code":"98","iso":"IR"},
  {"country":"Iraq","code":"964","iso":"IQ"},
  {"country":"Ireland","code":"353","iso":"IE"},
  {"country":"Isle of Man","code":"44-1624","iso":"IM"},
  {"country":"Israel","code":"972","iso":"IL"},
  {"country":"Italy","code":"39","iso":"IT"},
  {"country":"Ivory Coast","code":"225","iso":"CI"},
  {"country":"Jamaica","code":"1-876","iso":"JM"},
  {"country":"Japan","code":"81","iso":"JP"},
  {"country":"Jersey","code":"44-1534","iso":"JE"},
  {"country":"Jordan","code":"962","iso":"JO"},
  {"country":"Kazakhstan","code":"7","iso":"KZ"},
  {"country":"Kenya","code":"254","iso":"KE"},
  {"country":"Kiribati","code":"686","iso":"KI"},
  {"country":"Kosovo","code":"383","iso":"XK"},
  {"country":"Kuwait","code":"965","iso":"KW"},
  {"country":"Kyrgyzstan","code":"996","iso":"KG"},
  {"country":"Laos","code":"856","iso":"LA"},
  {"country":"Latvia","code":"371","iso":"LV"},
  {"country":"Lebanon","code":"961","iso":"LB"},
  {"country":"Lesotho","code":"266","iso":"LS"},
  {"country":"Liberia","code":"231","iso":"LR"},
  {"country":"Libya","code":"218","iso":"LY"},
  {"country":"Liechtenstein","code":"423","iso":"LI"},
  {"country":"Lithuania","code":"370","iso":"LT"},
  {"country":"Luxembourg","code":"352","iso":"LU"},
  {"country":"Macao","code":"853","iso":"MO"},
  {"country":"Macedonia","code":"389","iso":"MK"},
  {"country":"Madagascar","code":"261","iso":"MG"},
  {"country":"Malawi","code":"265","iso":"MW"},
  {"country":"Malaysia","code":"60","iso":"MY"},
  {"country":"Maldives","code":"960","iso":"MV"},
  {"country":"Mali","code":"223","iso":"ML"},
  {"country":"Malta","code":"356","iso":"MT"},
  {"country":"Marshall Islands","code":"692","iso":"MH"},
  {"country":"Mauritania","code":"222","iso":"MR"},
  {"country":"Mauritius","code":"230","iso":"MU"},
  {"country":"Mayotte","code":"262","iso":"YT"},
  {"country":"Mexico","code":"52","iso":"MX"},
  {"country":"Micronesia","code":"691","iso":"FM"},
  {"country":"Moldova","code":"373","iso":"MD"},
  {"country":"Monaco","code":"377","iso":"MC"},
  {"country":"Mongolia","code":"976","iso":"MN"},
  {"country":"Montenegro","code":"382","iso":"ME"},
  {"country":"Montserrat","code":"1-664","iso":"MS"},
  {"country":"Morocco","code":"212","iso":"MA"},
  {"country":"Mozambique","code":"258","iso":"MZ"},
  {"country":"Myanmar","code":"95","iso":"MM"},
  {"country":"Namibia","code":"264","iso":"NA"},
  {"country":"Nauru","code":"674","iso":"NR"},
  {"country":"Nepal","code":"977","iso":"NP"},
  {"country":"Netherlands","code":"31","iso":"NL"},
  {"country":"Netherlands Antilles","code":"599","iso":"AN"},
  {"country":"New Caledonia","code":"687","iso":"NC"},
  {"country":"New Zealand","code":"64","iso":"NZ"},
  {"country":"Nicaragua","code":"505","iso":"NI"},
  {"country":"Niger","code":"227","iso":"NE"},
  {"country":"Nigeria","code":"234","iso":"NG"},
  {"country":"Niue","code":"683","iso":"NU"},
  {"country":"North Korea","code":"850","iso":"KP"},
  {"country":"Northern Mariana Islands","code":"1-670","iso":"MP"},
  {"country":"Norway","code":"47","iso":"NO"},
  {"country":"Oman","code":"968","iso":"OM"},
  {"country":"Pakistan","code":"92","iso":"PK"},
  {"country":"Palau","code":"680","iso":"PW"},
  {"country":"Palestine","code":"970","iso":"PS"},
  {"country":"Panama","code":"507","iso":"PA"},
  {"country":"Papua New Guinea","code":"675","iso":"PG"},
  {"country":"Paraguay","code":"595","iso":"PY"},
  {"country":"Peru","code":"51","iso":"PE"},
  {"country":"Philippines","code":"63","iso":"PH"},
  {"country":"Pitcairn","code":"64","iso":"PN"},
  {"country":"Poland","code":"48","iso":"PL"},
  {"country":"Portugal","code":"351","iso":"PT"},
  {"country":"Puerto Rico","code":"1-787, 1-939","iso":"PR"},
  {"country":"Qatar","code":"974","iso":"QA"},
  {"country":"Republic of the Congo","code":"242","iso":"CG"},
  {"country":"Reunion","code":"262","iso":"RE"},
  {"country":"Romania","code":"40","iso":"RO"},
  {"country":"Russia","code":"7","iso":"RU"},
  {"country":"Rwanda","code":"250","iso":"RW"},
  {"country":"Saint Barthelemy","code":"590","iso":"BL"},
  {"country":"Saint Helena","code":"290","iso":"SH"},
  {"country":"Saint Kitts and Nevis","code":"1-869","iso":"KN"},
  {"country":"Saint Lucia","code":"1-758","iso":"LC"},
  {"country":"Saint Martin","code":"590","iso":"MF"},
  {"country":"Saint Pierre and Miquelon","code":"508","iso":"PM"},
  {"country":"Saint Vincent and the Grenadines","code":"1-784","iso":"VC"},
  {"country":"Samoa","code":"685","iso":"WS"},
  {"country":"San Marino","code":"378","iso":"SM"},
  {"country":"Sao Tome and Principe","code":"239","iso":"ST"},
  {"country":"Saudi Arabia","code":"966","iso":"SA"},
  {"country":"Senegal","code":"221","iso":"SN"},
  {"country":"Serbia","code":"381","iso":"RS"},
  {"country":"Seychelles","code":"248","iso":"SC"},
  {"country":"Sierra Leone","code":"232","iso":"SL"},
  {"country":"Singapore","code":"65","iso":"SG"},
  {"country":"Sint Maarten","code":"1-721","iso":"SX"},
  {"country":"Slovakia","code":"421","iso":"SK"},
  {"country":"Slovenia","code":"386","iso":"SI"},
  {"country":"Solomon Islands","code":"677","iso":"SB"},
  {"country":"Somalia","code":"252","iso":"SO"},
  {"country":"South Africa","code":"27","iso":"ZA"},
  {"country":"South Korea","code":"82","iso":"KR"},
  {"country":"South Sudan","code":"211","iso":"SS"},
  {"country":"Spain","code":"34","iso":"ES"},
  {"country":"Sri Lanka","code":"94","iso":"LK"},
  {"country":"Sudan","code":"249","iso":"SD"},
  {"country":"Suriname","code":"597","iso":"SR"},
  {"country":"Svalbard and Jan Mayen","code":"47","iso":"SJ"},
  {"country":"Swaziland","code":"268","iso":"SZ"},
  {"country":"Sweden","code":"46","iso":"SE"},
  {"country":"Switzerland","code":"41","iso":"CH"},
  {"country":"Syria","code":"963","iso":"SY"},
  {"country":"Taiwan","code":"886","iso":"TW"},
  {"country":"Tajikistan","code":"992","iso":"TJ"},
  {"country":"Tanzania","code":"255","iso":"TZ"},
  {"country":"Thailand","code":"66","iso":"TH"},
  {"country":"Togo","code":"228","iso":"TG"},
  {"country":"Tokelau","code":"690","iso":"TK"},
  {"country":"Tonga","code":"676","iso":"TO"},
  {"country":"Trinidad and Tobago","code":"1-868","iso":"TT"},
  {"country":"Tunisia","code":"216","iso":"TN"},
  {"country":"Turkey","code":"90","iso":"TR"},
  {"country":"Turkmenistan","code":"993","iso":"TM"},
  {"country":"Turks and Caicos Islands","code":"1-649","iso":"TC"},
  {"country":"Tuvalu","code":"688","iso":"TV"},
  {"country":"U.S. Virgin Islands","code":"1-340","iso":"VI"},
  {"country":"Uganda","code":"256","iso":"UG"},
  {"country":"Ukraine","code":"380","iso":"UA"},
  {"country":"United Arab Emirates","code":"971","iso":"AE"},
  {"country":"United Kingdom","code":"44","iso":"GB"},
  {"country":"United States","code":"1","iso":"US"},
  {"country":"Uruguay","code":"598","iso":"UY"},
  {"country":"Uzbekistan","code":"998","iso":"UZ"},
  {"country":"Vanuatu","code":"678","iso":"VU"},
  {"country":"Vatican","code":"379","iso":"VA"},
  {"country":"Venezuela","code":"58","iso":"VE"},
  {"country":"Vietnam","code":"84","iso":"VN"},
  {"country":"Wallis and Futuna","code":"681","iso":"WF"},
  {"country":"Western Sahara","code":"212","iso":"EH"},
  {"country":"Yemen","code":"967","iso":"YE"},
  {"country":"Zambia","code":"260","iso":"ZM"},
  {"country":"Zimbabwe","code":"263","iso":"ZW"}];

  const registerHandler = () => {
    let name = nameRef.current.value;
    let email = emailRef.current.value;
    let phone = phoneRef.current.value;
    switch(true)
    {
      case name.length < 5 && name.length !== 0 : toast.warn('!نام کوتاه است');
      break;
      case name.length === 0 : toast.warning('نام را وارد کنید');
      break;
      case name.search(/\D+/g) === -1 : toast.warn('نام قابل قبول نیست');
      break;
      case !email.includes('@') : toast.warn('ایمیل صحیح نیست');
      break;
      case email.indexOf('@') < 1 : toast.warn('ایمیل صحیح نیست');
      break;
      case phone.length === 0 : toast.warn('شماره تلفن را وارد کنید');
      break;
      case phone.length < 6 : toast.warn('شماره تلفن کوتاه است');
      break;
      case phone.indexOf('0') === 0 : toast.warn('کد پیش شماره را حذف کنید');
      break;
      default : formSubmiter();
    }
  }
  const formSubmiter = () => {
    console.log(phoneCode+phoneRef.current.value)
    setAcceptCode(!acceptCode)
  }
  return (
    <>
    <ToastContainer 
    position='top-center'
    theme='colored'
    autoClose={2500}
    className='Toast_info'
    />
    <div className='w-full min-h-screen bg-gray-600 login-gradient flex justify-center font-[shabnamMedium] items-center'>
        <div className='flex flex-col w-[90%] my-5  sm:w-[50%] 2xl:w-[60%] overflow-hidden rounded-md shadow-[0px_2px_5px_1px_rgba(0,0,0,0.5)]'>
            <div className='w-full bg-[#2b323b] text-white justify-center flex py-5 2xl:py-10'>
                <div className='flex flex-col gap-1 2xl:gap-3 items-center'>
                    <div className='bg-[#464c56] rounded-[50%] w-[4rem] h-[4rem] 2xl:h-[6rem] 2xl:w-[6rem] 2xl:text-7xl 2xl:p-3 text-5xl flex justify-center items-center'>
                      <BsPersonFill/>
                    </div>
                    <span className='text-lg 2xl:text-2xl'>عضویت</span>
                </div>
            </div>
            <form action="" onSubmit={(e)=>e.preventDefault()} className='bg-white flex flex-col 2xl:gap-10 gap-5 text-stone-700 py-5 px-5'>
                <div className='flex flex-col 2xl:text-2xl items-end gap-2 w-full text-sm  sm:text-base'>
                  <label className='text-stone-600 w-full' htmlFor="name">نام:</label>
                  <input ref={nameRef} type="text" className='bg-[#c3cad2] text-left outline-none border-none w-[100%] 2xl:w-[80%] sm:w-[90%] p-1' name='name'/>
                </div>
                <div className='flex flex-col items-end 2xl:text-2xl gap-2 w-full text-sm  sm:text-base'>
                    <label className='text-stone-600 w-full' htmlFor="email">ایمیل:</label>
                    <input ref={emailRef} className='bg-[#c3cad2] outline-none text-left border-none w-[100%] sm:w-[90%] 2xl:w-[80%] p-1' type="email" name="email" id="" />
                </div>
                <div className='flex flex-col 2xl:text-2xl items-start gap-2 text-sm  sm:text-base'>
                    <label className='text-stone-600' htmlFor="phone">شماره موبایل:</label>
                    <div className='w-full flex items-center justify-end gap-1 2xl:gap-3'>
                      <input onChange={(e)=>{
                        if(e.target.value.search(/\D+/g) !== -1)
                        {
                          e.target.value = ''
                          toast.warn("شماره تلفن صحیح را وارد کنید")
                        }
                      }} ref={phoneRef}  type="text" className='bg-[#c3cad2] text-left outline-none border-none w-[60%] 2xl:w-[50%] p-1' name='phone'/>
                      <input ref={codeRef} defaultValue={'98+'}  type="text" className='bg-[#c3cad2] text-left outline-none border-none w-[20%] 2xl:w-[10%] p-1' name='phone'/>
                      <select onChange={(e)=>{
                        setPhoneCode(e.target.value);
                        codeRef.current.value = '';
                        codeRef.current.value = `${e.target.value}+`
                      }}  onClick={(e)=>setSwitch(true)} name="" id="" className='w-[20%] 2xl:w-[10%] border-2 border-slate-800 outline-none rounded-sm'>
                        {
                          !Switch
                          ?
                          <option value="+98">Iran</option>
                          :
                          <>
                          {
                            ListOfCountryCodes.map(item => (
                              <option value={item['code']}>{item['country']}</option>
                            ))
                          }
                          </>
                        }
                      </select>
                    </div>
                </div>
                {
                  acceptCode 
                  ?
                  <div className='flex items-center justify-start gap-2 w-full mt-5 text-sm sm:text-base 2xl:text-2xl'>
                    <label htmlFor="acceptCode">کد تایید:</label>
                    <input name='acceptCode' type="text" onChange={(e)=>{}} className='bg-[#c3cad2] text-left outline-none border-none w-[20%] p-1 2xl:w-[10%]'/>
                  </div>
                  :
                  <></>
                }
                <span className='sm:text-sm text-stone-500 text-xs 2xl:text-xl'>اطلاعات شخصی شما برای پردازش سفارش شما استفاده می‌شود، و پشتیبانی از تجربه شما در این وبسایت، و برای اهداف دیگری که در سیاست حفظ حریم خصوصی توضیح داده شده است.</span>
                <div className='w-full flex flex-col items-center gap-3 2xl:gap-5 my-3'>
                   {
                    acceptCode
                    ?
                    <button type="button" className='bg-green-600 2xl:py-3 2xl:text-2xl hover:bg-green-500 transition-all duration-300 text-white rounded-md py-2 w-[70%] sm:w-[60%]'>ثبت کد تایید</button>
                    :
                    <button onClick={(e)=>registerHandler()} type="button" className='bg-green-600 2xl:text-2xl 2xl:py-3 hover:bg-green-500 transition-all duration-300 text-white rounded-md py-2 w-[70%] sm:w-[60%]'>عضویت</button>
                   }
                   <Link to={'/login'} className='bg-blue-600 2xl:py-3 hover:bg-blue-500 transition-all 2xl:text-2xl duration-300 text-white rounded-md py-2 w-[70%] sm:w-[60%] flex justify-center'><button>ورود</button></Link>
                </div>
            </form>
        </div>
    </div>
    </>
  )
}

export default Register;