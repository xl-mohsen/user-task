# پیاده سازی تسک 
### تسک شماره ۱ :‌تعریف کردن و اضافه کردن پروژه به گیت هاب ✅️

### تسک شماره ۲ :‌ پیاده سازی سرویس login و logout که با توجه به توضیحاتی که داخل داکیومنت Users Api داده شده بود با موفقیت انجام شد ✅️

پیاده سازی این تسک به این صورت بود که دوتا func تعریف شد برای هرکدام از عملیات های login و logout و بعد توسط api ها و react router dom و اطلاعاتی که از user داخل local storage مرورگر save شده بود این عملیات انجام میشد . به این صورت که اطلاعاتی که از کاربر برای login دریافت میشد به سمت api ارسال میشه و اگر response موفقیت آمیز بود user به صفحه document انتقال داده میشه و اگر در صفحه document بنا به دلایلی خواست logout کنه اطلاعات session یوزر که داخل local storage ذخیره شده واکشی میشه و به سمت api فرستاده میشه اگر response موفقیت آمیز بود اطلاعات از local storage پاک میشوند و یوزر از صفحه document خارج میشه 


### تسک شماره ۳ : نمایش curent time زمانی که کاربر login کرد ✅️

پیاده سازی این تسک به این صورت بود که وقتی کاربر login میکنه توسط react router dom کاربر رو به صفحه مورد نظر که زمان خود سیستم کاربر رو به صورت دیجیتالی نشان میده هدایت میکنیم که کاربر در این صفحه توانایی logout کردن و مشاهده username خود که موقع فرایند signup ذخیره کرده را دارد


### تسک شماره ۴ :‌ جلو گیری از ورود یوزر به صفحه document وقتی عملیات login انجام نشده بود ✅️

پیاده سازی این تسک به این صورت بود که توسط react router dom و اطلاعات session کاربر که داخل local storage ذخیره میشه استفاده میشه . 
به این صورت که اگر session از کاربر مورد نظر داخل local storage ذخیره نشده باشه توسط private route به کاربر اجازه داده نمیشود که وارد صفحه مورد نظر بشه
 
+++++ یه مورد اضافی هم که اینجا انجام شده این است که اگر کاربر login کرده باشه و بخواد به صفحه login برگرده باز چک میشه و دوباره جلوش گرفته میشه از ورود به این صفحه ینی این عملیات دو طرفه چک میشه

### تسک شماره ۵ :‌ پیاده سازی unit test برای login page  🔴️

از آنجایی که تجربه پیاده سازی unit test ندارم نتوستم این تسک رو طوری پیاده کنم که رضایت بخش باشه برای همین داخل پروژه قرارش ندادم . هرچند خیلی تلاش کردم برای پیاده سازیش که اگر تایم بیشتری در اختیار داشتم قطعا میتونستم پیاده سازیش کنم چون چیز خاصی نداره .

### تسک شماره ۶ :‌ ✅️

این تسک در واقع با code splitting حل میشه ینی ما بیایم به صورت lazy loading کامپوننت های route اصلی رو پیاده کنیم که این امر باعث میشه chunk file ما splite بشه و در هر زمانی که ما رو route مشخص بودیم component مورد نظرش استفاده شه و همزمان همه component ها داخل bundle file ما قرار نگیرند 

ریکت با قابلیت lazy loading این ویژگی رو در اختیار ما میذاره که هروقت خواستیم route مورد نظر رو call کنیم فقط همون کامپوننت call شه و بقیه route ها به اصطلاح hide بمونن . 


---------------------------------------------------------------------------------------------------------------------------------------------------------

### تسک های اضافه ای که انجام شده ✅️

+++++پیاده سازی صفحه error به طوری که هر routeای به جز route های اصلی استفاده شه صفحه ارور و لینک بازگشت به صفحه اصلی به کاربر نمایش داده بشه

++++++پیاده سازی فرم ثبت نام به طوری که کاربر میتونه ثبت نام کنه و بعد از ثبت نام فرایند login رو انجام بده

+++++گرفتن اطلاعات کاربر زمانی که کاربر login کرده و در صفحه document قرار داره . به صورتی که اطلاعات کاربر از api گرفته میشه و username او در navbar نشان داده میشه

+++++جلو گیری از ورود کاربر به صفحه login اگر همزمان اطلاعات session کاربر در مرورگر باشه . ینی کاربر هنوز login باشه از ورودش به صفحه login جلوگیری میشه

اطلاعات کاربر داخل local storage ذخیره میمونه و در expire time که داخل session قرار داده شده بود این اطلاعات از local storage پاک میشوند . ینی کاربر تا زمان expire time داخل صفحه خود login میمونه و به اصطلاح اطلاعات کاربر persist میشه و کاربر با refresh صفحه یا بستن مرورگر باز هم session پابرجا میمونه

++++++مدریت ارور ها چه موقع درخواست ها چه زمان پرکردن فرم ها


