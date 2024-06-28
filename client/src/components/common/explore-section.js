import React from 'react';
// import "../css/explore-section.css";

const Style = () => {
    return (
      <style>
        {`
.container{
  max-width: 1320px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 48px;
}

.titlle-section{
  color: #2d4271;
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 2rem;
}

.contai-items{
  display: flex;
  flex-wrap: wrap;
}

.item{
  width: 20%;
}

.explore-tour__item__image {
  width: 255px;
  overflow: hidden;
}

.explore-tour__item__image img{
  height: 100%;
  width: 100%;
  border-radius: 5px;
}

.position-relative{
  position: relative;
}

.position-absolute{
  position: absolute;
}

.card-img-overlay{
  bottom: 0;
  padding: 1rem;
  background: linear-gradient(180deg, rgba(45, 66, 113, 0), #2d4271);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

.card-title {
  line-height: 1.25 !important;
  margin-bottom: .5rem;
  font-size: 20px;
}

.card-title a {
  color: #fff;
}

        `}
      </style>
    );
};

const ExploreSection = () => {
    
    return (
        <> 
     <Style />

        <div className="container">
            <h2 className="titlle-section">
                Khám phá sản phẩm của chúng tôi
            </h2>

            <br></br>

            <div className="contai-items">
                <div className="item">
                <div className="card text-white explore-tour__item me-4" style={{ width: '100%', display: 'inline-block' }}>
                    <div className="explore-tour__item__image position-relative">
                    <img src="https://media.travel.com.vn/Advertisings/bn_240219_tour%20the%20thao.png" className="card-img w-100" alt="" />
                    <div className="card-img-overlay position-absolute">
                        <h3 className="card-title lh-sm">
                        <a href="https://travel.com.vn/tim-tour/h%C3%A0nh%20h%C6%B0%C6%A1ng/0/0/2023-12-22/0/0/ket-qua.aspx">
                            Tour trải nghiệm giới trẻ, sự kiện, thể thao
                        </a>
                        </h3>
                    </div>
                    </div>
                </div>
                </div>

                <div className="item">
                <div className="card text-white explore-tour__item me-4" style={{ width: '100%', display: 'inline-block' }}>
                    <div className="explore-tour__item__image position-relative">
                    <img src="https://media.travel.com.vn/Advertisings/bn_231116_viber_image_2023-11-14_11-47-57-795.jpg" className="card-img w-100" alt="" />
                    <div className="card-img-overlay position-absolute">
                        <h3 className="card-title lh-sm">
                        <a href="https://travel.com.vn/tim-tour/h%C3%A0nh%20h%C6%B0%C6%A1%C6%A1ng/0/0/2023-12-22/0/0/ket-qua.aspx">
                            ✨ Tour mới - Hành trình độc đáo
                        </a>
                        </h3>
                    </div>
                    </div>
                </div>
                </div>

                <div className="item">
                <div className="card text-white explore-tour__item me-4" style={{ width: '100%', display: 'inline-block' }}>
                    <div className="explore-tour__item__image position-relative">
                    <img src="https://media.travel.com.vn/Advertisings/bn_220908_charter-an-do(4).jpg" className="card-img w-100" alt="" />
                    <div className="card-img-overlay position-absolute">
                        <h3 className="card-title lh-sm">
                        <a href="https://travel.com.vn/tim-tour/h%C3%A0nh%20h%C6%B0%C6%A0%C6%A1ng/0/0/2023-12-22/0/0/ket-qua.aspx">
                            Du lịch kết hợp hành hương
                        </a>
                        </h3>
                    </div>
                    </div>
                </div>
                </div>

                <div className="item">
                <div className="card text-white explore-tour__item me-4" style={{ width: '100%', display: 'inline-block' }}>
                    <div className="explore-tour__item__image position-relative">
                    <img src="https://media.travel.com.vn/Advertisings/bn_231116_Twleve-Apostles-Helicopter-Flight-3-1.jpg" className="card-img w-100" alt="" />
                    <div className="card-img-overlay position-absolute">
                        <h3 className="card-title lh-sm">
                        <a href="https://travel.com.vn/tim-tour/h%C3%A0nh%20h%C6%B0%C6%A0%C6%A1ng/0/0/2023-12-22/0/0/ket-qua.aspx">
                            Tour trải nghiệm cao cấp
                        </a>
                        </h3>
                    </div>
                    </div>
                </div>
                </div>

                <div className="item">
                <div className="card text-white explore-tour__item me-4" style={{ width: '100%', display: 'inline-block' }}>
                    <div className="explore-tour__item__image position-relative">
                    <img src="https://i.pinimg.com/564x/87/5f/52/875f52dcd18ea7277dafce382c42a33a.jpg" className="card-img w-100" alt="" />
                    <div className="card-img-overlay position-absolute">
                        <h3 className="card-title lh-sm">
                        <a href="https://travel.com.vn/tim-tour/h%C3%A0nh%20h%C6%B0%C6%A0%C6%A1ng/0/0/2023-12-22/0/0/ket-qua.aspx">
                            Khám phá văn hóa đặc sắc các vùng miền
                        </a>
                        </h3>
                    </div>
                    </div>
                </div>
                </div>

            </div>
        </div>

        </>
    );
};

export default ExploreSection;

