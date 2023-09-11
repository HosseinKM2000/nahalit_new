import { motion } from "framer-motion";
import React from "react";
import EndBox3 from "../../Components/EndBox3/EndBox3";
import { Helmet } from "react-helmet";
import FixedIcon from "../../Components/FixedIcon/FixedIcon";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import ResponseHeader from "../../Components/ResponseHeader/ResponseHeader";


function SworkService() {
  return (
    <main>
      <Helmet>
        <title>نهال آی تی | خدمات کسب و کار</title>
      </Helmet>
      <header>
        <div className="max-lg:hidden">
          <Header />
        </div>
        <div className="lg:hidden">
          <ResponseHeader />
        </div>
      </header>
      <div className='Business-content Services-style flex flex-col items-center gap-10 2xl:gap-20 mb-10'>
        <img src={"/img/Business/کسب-و-کار-1024x576.jpg"} alt="header" className='w-full'/>
        <div className='flex flex-col gap-10 px-1'>
            <div>
                <motion.h1 whileInView={{scale:[0,1]}} transition={{duration:1}} viewport={{once:true}} className='text-center text-green-137'>خدمات در حوزه کسب و کار</motion.h1>
                <p>دقت کرده‌اید ما ایرانی‌ ها چقدر برای مدیریت کسب و کار از اصول واقعی دور شده و به سمت تجربیات خودمان یا بقیه می‌رویم؟ مثلا فلان مغازه‌دار با مشتریانش خوش رفتاری نمی‌ کند چون طبق تجربه پدرش این کار باعث پررو شدن مشتری می‌ شود. یا صاحب فلان کارخانه هم رفتار سردی به کارکنانش نشان می‌ دهد چون طبق تجربیات مدیر قبلی، رفتار خوب با نیرو باعث تنبل شدن او خواهد شد و  . . .  . این شاید یکی از مهم‌ ترین دلایل شکست مشاغل در ایران باشد.</p>
                <p>هر سازمانی با در نظر گرفتن اهدافی متولد می شود و شروع به رشد می کند. هر چقدر که سازمان در مسیر حرکت خود به اهداف مدیران و مالکان خود نزدیک تر شود، می توانیم بگوییم که از سلامت مناسبی برخوردار است. عوامل و مسائل بسیاری هستند که سلامت یک سازمان را می توانند تهدید کنند و یا به خطر بیندازند.</p>
                <p>برخی از این عوامل در داخل خود سازمان هستند و برخی عواملی در محیط و خارج از سازمان. زمانی که عامل یا عواملی سازمان را دچار اختلال می کنند، پیش از آنکه مدیران پی به وجود مشکلات ببرند، می توانند نشانه هایی را در خصوص اختلال به وجود آمده مشاهده نمایند. این امر مستلزم رصد کردن پیوسته سازمان توسط مدیران ارشد سازمان است.</p>
                <p>تیم خدمات کسب و کار نهال آی تی ، جهت بهبود سریع تر در کسب و کار های نوپا و انواع کسب و کارها، میتواند از ابتدای هر کسب و کاری، تا برند شدن و افزایش فروش آن کسب و کار ، به شما در زمینه ثبت برند و ثبت لوگو ، ارسال ایمیل و پامک انبوه کمک کند.</p>
            </div>
            <div className='flex flex-col items-center sm:flex-row'>
                <div>
                    <motion.h2 whileInView={{x:[500,0] , opacity:[0,1]}} transition={{duration:1,delay:1}} viewport={{once:true}} className='text-green-137 py-3'>خدمات ثبت برند</motion.h2>
                    <motion.p whileInView={{x:[1000,0] , opacity:[0,1]}} transition={{duration:1,delay:1.5}} viewport={{once:true}}>اصطلاح برند به مفهومی در تجارت و بازاریابی اشاره دارد که یک شرکت، محصول یا فرد را از سایر همسان ها تمایز می دهد. برندها قابل لمس نیستند و بیشتر به عنوان یک حس و شناخت نسبت به یک شرکت، فرد، یا محصول شناخته می شود.</motion.p>
                    <motion.p whileInView={{x:[1000,0] , opacity:[0,1]}} transition={{duration:1,delay:1.5}} viewport={{once:true}}>در واقع می توان گفت هویتی است که شامل ایده ها، ارزش ها، باورها، نگرشها، استاندارد، کیفیت، حسن نیت و اعتماد در کسب و کار و مجموعه ای از این برداشتها و انتظارات در ذهن مصرف کنندگان است که معمولا از طریق تبلیغات مداوم، بازاریابی، روابط عمومی و ارتباطات، همچنین صرف هزینه های بسیار و از طریق واکنش ها و بازخوردهای مصرف کننده و مخاطب موفقیت خود را بدست می آورد و به مرور زمان نیز به تکامل می رسد.</motion.p>
                </div>
                <motion.img src={"/img/Business/branding-matters-1-min.png"} alt="brand" className='w-80 2xl:w-1/4 2xl:h-96' whileInView={{x:[1000,0] , opacity:[0,1]}} transition={{duration:1}} viewport={{once:true}}/>
            </div>
            <motion.div whileInView={{y:[300,0],opacity:[0,1]}} transition={{duration:1}} viewport={{once:true}}>
                <p>در واقع هر شرکت با تعریف هویت برند خود این پیام را به شرکاء تجاری خود می دهد که ما چگونه سازمانی و با چه اهدافی هستیم. به بیان دیگر شرکت با تعریف این هویت تصویر ذهنی مطلوب خود را برای شکل گیری در ذهن مشتری در آینده ترسیم می نماید.</p>
                <p>هویت بخشی به هر برند فرآیندی است که مستلزم تعریف این هویت، عینیت بخشیدن به آن در نمادها و لوگوهای تجاری سازمان (رنگ، فرم و …) و نیز کلیه فعالیت های عملیاتی و تبلیغاتی سازمان برای همسو بودن با آن هویت است.</p>
                <p>به طور مثال یک شرکت خدمات پرداخت الکترونیک می خواهد در ذهن مشتریان خود به عنوان شریکی قابل اطمینان نقش بسته و با توجه به اهمیت عامل اطمینان در مبادلات مالی، به انتخاب اول مشتری در فضای رقابتی خود تبدیل گردد.</p>
                <p>در واقع قابل اعتماد بودن و پایداری و شرایط مختلف اقتصادی و توان مالی آن به عنوان اجزای تشکیل دهنده هویت شرک نموده و می بایست کلیه فعالیت های شرکت از نحوه برخورد کارکنان مرکز تما مشتریان، نحوه و مدت زمان رفع مغایرتهای مالی ایشان، ادبیات، پوشش و نحوه ارائه خ کارشناسان پشتیبانی، نام و علامت تجاری و… در ارتباطی هدفمند و یکپارچه با برندی را شکل دهند که این تصویر را به صورت پایدار خلق نمایند.</p>
            </motion.div>
            <div className='flex flex-col items-center sm:flex-row'>
               <div>
                 <motion.h3 whileInView={{scale:[0,1],y:[200,0],x:[-200,0],opacity:[0,1]}} transition={{duration:0.5}} viewport={{once:true}} className='text-green-137 py-3'>خدمات ثبت لوگو</motion.h3>
                 <motion.p whileInView={{y:[300,0],opacity:[0,1]}} transition={{duration:1}} viewport={{once:true}}>لوگو یک هویت تصویری برای رساندن مفهوم خدمت ، نشان دادن هویت یک سازمان بزرگ و یا کوچک ، به مفهوم رسانی یک وضعیت ، نشانه گذاری یک محصول به وسیله شرکت‌های تجاری، تولیدی و صنعتی و هم‌چنین کسب وکارهای کوچک استفاده می‌ شود تا از این طریق نوع خدمات ، اهداف مورد نظر و محصولات را با بکارگیری از خلاقیت به مخاطب معرفی کنند.</motion.p>
               </div>
               <motion.img src={"/img/Business/logo-design-service-500x500-transformed-min.png"} alt="logo"  className='w-80 2xl:w-[600px] 2xl:h-96 py-3' whileInView={{scale:[1.2,0.8,1,0.8,1,0.8,1]}} transition={{duration:2}} viewport={{once:true}}/>
            </div>
            <div>
                <p>اولین و موثرترین گام برای معرفی یک برند می باشد. که سایر پروسه های هویت سازی یک برند (نظیر بسته بندی، طراحی لیبل و …) را تحت تاثیر خود قرار می دهد. یک آرم و لوگو موفق و صحیح به راحتی می تواند گام های یک مجموعه را به خاطر ثبات بصری خود محکم و هدفمند سازد. اعتماد، شناخت و موفقیت در بازار سه بخش اصلی است که به پشتوانه طراحی برندینگ صحیح ، بجا و مناسب در روند گسترش یک مجموعه کمک بسزا می کند.</p>
                <p>اما، هدف اصلی از داشتن لوگو چیست؟ چرا تجارت ما احتیاج به یک لوگو با طراحی حرفه ای داریم؟</p>
                <p>یک پاسخ ساده وجود: یک لوگوی با طراحی حرفه ای توجهات را جلب می کند، و اثری ماندگار روی ذهن مردم دارد. این درست است! برای مثال، به لوگوی نایک، شرکت مشهور کفش های ورزشی نگاه کنید. هنگامی که شما لوگوی تیک را می بینید، به سرعت می فهمید که این متعلق به نایک است. یک مثال معروف دیگر YaHoo! است. مثال های فراوان دیگری نیز میتوان آورد که شما احتمالا هر روز می بینید و بدون شک قدرتی که یک لوگو و شناسه دار و خوب برای شرکت ها را دارد همه تحسین می کنند.</p>
            </div>
            <div className='flex flex-col items-center sm:flex-row'>
              <div>
                <motion.h4 whileInView={{y:[-300,0],opacity:[0,1]}} transition={{duration:1}} viewport={{once:true}}className='text-green-137 py-3'>ارسال پیامک انبوه و ارسال ایمیل انبوه</motion.h4>
                <motion.p whileInView={{y:[300,0],opacity:[0,1]}} transition={{duration:1}} viewport={{once:true}}>یکی از سریع ترین، موثرترین و ارزان ترین روش تبلیغات، ارسال پیامک و ارسال ایمیل تبلیغاتی می باشد با استفاده از امکانات قدرتمندی که پنل اس ام اس و ایمیل در اختیار شما قرار میدهد میتوانید متن تاثیر گذار خود را در کمترین زمان ممکن به مخاطبان خود برسانید و با استفاده از دیگر امکانات پنل پیامک و ایمیل ، محصول و کار خود را تبلیغ نمایید و از این طریق مشتریان خود را افزایش دهید.</motion.p>
                <motion.p whileInView={{y:[300,0],opacity:[0,1]}} transition={{duration:1}} viewport={{once:true}}>استفاده از پنل پیامک و ایمیل یکی از بهترین و آسانترین راه ها برای اطلاع رسانی و ارتباط مستمر با مشتریان می باشد.</motion.p>
              </div>
              <motion.img whileInView={{x:[-500,0],opacity:[0,1]}} transition={{duration:1}} viewport={{once:true}} src={"/img/Business/مقاله-پیامک-انبوه-3-min.png"} alt="sms"  className='w-[10rem] 2xl:w-[20rem] 2xl:h-[15rem]'/>
            </div>
            <motion.div className='flex flex-col gap-3 2xl:mt-20' whileInView={{x:[1000,0],opacity:[0,1]}} transition={{duration:1.5,delay:1}} viewport={{once:true}}>
                <h5 className='text-green-137 text-center py-3'>خدمات کسب و کار</h5>
                <div className='flex sm:flex-row flex-col gap-6'>
                    <div className='flex flex-col items-center gap-3 2xl:gap-2 justify-between'>
                        <img src={"/img/Business/brand-registration1-transformed-min.png"} alt="img-1" className='w-24 2xl:w-[8rem]'/>
                        <span className='font-bold text-gray-66'>ثبت برند</span>
                        <p className='text-center span text-gray-77'>اصطلاح برند به مفهومی در تجارت و بازاریابی اشاره دارد که یک شرکت، محصول یا فرد را از سایر همسان ها تمایز می دهد. تفاوت را با نهال آی تی تجربه کنید.</p>
                    </div>
                    <div className='flex flex-col items-center gap-3 2xl:gap-2 justify-between'>
                     <img src={"/img/Business/Business-Logo-Design-Best-Qualitytrahy-lwgw-ksb-w-kar_1609095951-transformed-min.png"} alt="img-2" className='w-32 2xl:w-72'/>
                        <span className='font-bold text-gray-66'>ثبت لوگو</span>
                        <p className='text-center span text-gray-77'>لوگو یک هویت تصویری برای رساندن مفهوم خدمت ، نشان دادن هویت یک سازمان بزرگ و یا کوچک می باشد. طراحی انواع لوگو های گرافیکی در تیم نهال آی تی</p>
                    </div>
                    <div className='flex flex-col items-center gap-3 2xl:gap-2 justify-between'>
                    <img src={"/img/Business/sms-anboh-transformed-1-min.png"} alt="img-3" className='w-32 2xl:w-72'/>
                        <span className='font-bold text-gray-66'>ارسال پیامک و ایمیل انبوه</span>
                        <p className='text-center span text-gray-77'>یکی از موثرترین روش تبلیغات، ارسال پیامک و ایمیل تبلیغاتی می باشد. استفاده از پنل پیامک و ایمیل یکی از بهترین راه برای اطلاع رسانی و ارتباط با مشتریان می باشد.</p>
                    </div>
                </div>   
            </motion.div> 
               <div className='w-full flex flex-col items-center mt-3 2xl:mt-20 2xl:gap-5'>
                <h6 className='text-center text-gray-66 py-3'>تعرفه خدمات کسب و کار تیم نهال آی تی</h6>
                <img src={"/img/Business/تعرفه-خدمات-کسب-و-کار-600x831.png"} alt="tarrif" className='w-7/12 sm:w-[17rem]'/>
               </div>
        </div>
        <EndBox3 content={{p:'جهت سفارش انواع پروژه خدمات کسب و کار، میتوانید به صورت رایگان ، با شماره 09927674217 تماس بگیرید و یا از طریق لینک زیر اقدام کنید.',b:'سفارش خدمات کسب و کار'}}/>
    </div>
      <div>
        <FixedIcon />
      </div>
      <footer>
        <Footer />
      </footer>
    </main>
  );
}

export default SworkService;