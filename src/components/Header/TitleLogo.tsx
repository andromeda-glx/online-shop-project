const TitleLogo = () => {
  return (
    <div className="flex items-center">
      <div className="w-[55px]">
        <img
          className="w-[100%]"
          src="/online-shop-project/images/logo.png"
          alt="MinimalMarket logo"
        />
      </div>
      <span className="text-2xl text-main-theme font-semibold hidden lg:block">
        Minimal
        <span className="text-secondary-theme">Shop</span>ping
      </span>
    </div>
  );
};

export default TitleLogo;
