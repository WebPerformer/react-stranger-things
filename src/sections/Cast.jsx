import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Cast() {
  return (
    <section className="cast">
      <div className="content">
        <div className="title">
          <h1>Visão Geral</h1>
        </div>
        <div className="cast-container">
          <div className="cast-title">
            <h1>PERSONAGENS</h1>
          </div>
          <Swiper
          slidesPerView={4.2}
            pagination={{
              type: "progressbar",
            }}
            modules={[Pagination]}
            className="cast-swiper"
          >
            <SwiperSlide>
              <img src="https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQYAInrRRo3yr22MjLGWP5ohN-8QYCLspEXxOxX58QVKWjFGs478ABiz_pQ1eaIDk4esgxGIJDnTHrdtjPMKGsIxXm84G2uHtkLLbxbt5Y6vvlAplD4mmLRaQrxTybMCPlR8Nwi2gLtm2C63jYp7Jo8nj.jpg?r=b98" alt="" />
              <div className="hover-name">
                <div className="name"><p>Max</p></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQSyhG18Slcc8emuG05nOaiL8zKzRKqbf6wVMtRqeW4zZUEHmeY0S69Bi6xSdqo_BrjJW-wvJkj-61SHOKFPu7wArgyo8tvJ7uc2YaET1SiFG-WqYfa3e0wUP2eRrDBLLy37jhbFRhk_hjvj__aApLtOn.jpg?r=f27" alt="" />
              <div className="hover-name">
                <div className="name"><p>Lucas</p></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQayOizOW0GXY9knuvBQ2R7YH63vu1FrNGc6q78-oSgrEWVANvH018yliTewIsZMj35wnuulBAdYgIEAooxrW_U3xFcVEV0G-ODxVZi5Kzf7HByGtWYFVWkd2lM0uOJBdBY0CP6Nu3GBD2baw2nOYqb5X.jpg?r=37f" alt="" />
              <div className="hover-name">
                <div className="name"><p>Dustin</p></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQXG9lHAjFVaYP-bQ-U17NlLmnjIe8Tz8s6NCtK9VuARe2MxX_mo9wvpwUwagHW8Sx0OwvTvBNMDiwDJ97rAfsFA6mTA1eH2UaPhD00WgzjON-qTfXed0QDAaDHh4qeRGDSaArb_tI_8tNmlqXtDwLfax.jpg?r=3c2" alt="" />
              <div className="hover-name">
                <div className="name"><p>Steve</p></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQWNabFle-FffS5iYa0XoXI5-u34j0JFpIdmKY_JwKxLNi68MlC-d_W0_HlubOEGeMqNmFm__y1aGshqfO1Xs-_5MoyYobQDubKj__V2JCmvGaAbutO-vXzf4oV4fQ4xRT3w0-eOEKj-Ghg6mwxzyZ95j.jpg?r=444" alt="" />
              <div className="hover-name">
                <div className="name"><p>Robin</p></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQZjqk4fG5-Kdk2h_GN3MrFm6AzOxFAPkVfZCMJgH8WUZf8rQaN40er9NSGItO0rSiq2aQ966hYKUljsqzSXKq3AQltngM_Q_z8zS2jtX6kBT0LlnLIzxRhx-urtVVeyEknS4DXonXzrfdD6QXJ2qpLHV.jpg?r=ef2" alt="" />
              <div className="hover-name">
                <div className="name"><p>Erica</p></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQd_zYaICee5enpGUjeEduZj_I2vV2GVLUMg6G2DkplEyslLMTM2RRQU0b8n6TByBbbq5nhzFnDAYz6T0GxX0nuTUgyJzPCThnT-IapL4yLNVYesA2CIW1IAlVcnEfpjGhatkuWYSUUB9kLJzrK3wQG6s.jpg?r=d55" alt="" />
              <div className="hover-name">
                <div className="name"><p>Nancy</p></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQXZ1Lp-4ie3ziOa6A2off5DenDBUGk-ujbKOVw2yUXb10WWEmlDhqrxjEZ8wKNRYd5ySOxzQhVSiPfthOu_btAczOOtIeqNP0yiL5dA-bAJlu8dukp4ir7XTLvmARY7xAtDQoazh6LSPtguA-gJnIZk_.jpg?r=c31" alt="" />
              <div className="hover-name">
                <div className="name"><p>Karen</p></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQTB49qD2ycEHVIbEuz6V-OVOqC4G6fAS7duAsmRNERscSnn50SIAODYmhxSGH2wacYia8FQJ9pZMSEajC9laCb7dzDbgKgwBh7k4LRyY7SGjGZS0zKs0LjzJLsXeR6Chz4GvJXnVZKrrK9gA-IeKSVXB.jpg?r=74c" alt="" />
              <div className="hover-name">
                <div className="name"><p>Eddie</p></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQZYHSW5xdaVCVdOS7dUyAqymhxE4DeTNoKvHq0TpGy5QZrcpKynTRJhvEpA147w1pXd75IagFXnnnnY5i2IAz6VQlWb1isfmZmdDl3NvAMnXTbGYArwiU4YhCLo-ryJTnTMtxu_qAh80Iu5zFWoMsOg1.jpg?r=542" alt="" />
              <div className="hover-name">
                <div className="name"><p>Mike</p></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQXnnccA6rJQCqZCCHS_bFgG-kY68yAAj73RgOwOvnPB4R1_q6etjyuoLQOBow7hMIgyCdS8VEAJlHFmH6wKWIwcFABXOHgNi0qJwN9PR2L-1ExBkoWTxDu2UBjCKjB7e8fCpUpZctYKaax3EsDBfRy6W.jpg?r=8f1" alt="" />
              <div className="hover-name">
                <div className="name"><p>Will</p></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQVo2vam1_WtRlQ5QXENzg9gT7Us-KDYjYeKfyqFdOn0lqPztYHQQhTGOBuMhr9TgDZFrvj4sNzpt8bvMTIyWhpDHZ-zdWfbZFq-thGVLoKlVZiUbgZwsYvrTSLfAkbUSt-0IPDsdP3MAhECPUWKxoP-Z.jpg?r=ad3" alt="" />
              <div className="hover-name">
                <div className="name"><p>Jonathan</p></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQfcasArsMoCLfUhkA_juFgTVOcedSRzHuq1U9LhL14iitCR7iDW3Knnfm9ycnr79LLGH1qZ3HVLXqJthPbb9K1lF92e8ShENgkqjhy80Nm7DV8-clRPy0HINLiwjeR9l_-bZ6UVAYb5LCexkZq2fGIzI.jpg?r=4df" alt="" />
              <div className="hover-name">
                <div className="name"><p>Argyle</p></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQU5uUN25DmkwSzpGZ_PbgknuvlgpCW2_U2cZqLG7sio156U8h1XsV6pptQ4LYygOQygHBZb6TdJxSmxyMIquW4daFmHS18o2Voh12dtPfGDthzDzQ_APXXEPHAtH6-1jVKBycQyTlQJDlAElyRldy1ed.jpg?r=3a2" alt="" />
              <div className="hover-name">
                <div className="name"><p>Hopper</p></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQTT6UpTYRd1SxWdKiPZCOyo6oEEamOtyZHeZjDJWRY78j8_HY8yNtAnuLNI6TtNdS5eVfwTWUrD4JUHvPLXHgkvqsvwjULmw74Ir6RtIsMJzumTlKn1TM9Y4uygkek7QpYS2AdLH9MRojQuaupkxFaFU.jpg?r=aa2" alt="" />
              <div className="hover-name">
                <div className="name"><p>Joyce</p></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQZVJC-n-XaRTGf0lc8RTDYt2q_uvZHrrzbcLov6fyvrECWelZNw_SGTG5OI2g-wifR8PMZ4muG6lk5fJEZXxXvqDGmtt1nEcDj7Aop9Cb1L-8T_NVhzDHG4DQBhRiryPS7MehaDXgMyf6BSc8VkBWcqS.jpg?r=73f" alt="" />
              <div className="hover-name">
                <div className="name"><p>Murray</p></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQf54bmer4FGr_1EqI0JmKK4lWWUrXbgigRxu2BSXSGsCFd8A6fyMvnFyT30c8dKLSOWDcB1su6fowvsYToGHjRURyNw9TG07hAuqgUi45c1m-sJFmCIGY0ZimJ28o78Ed5WJFBgkREF1AaVA6No3XB9v.jpg?r=c59" alt="" />
              <div className="hover-name">
                <div className="name"><p>Eleven</p></div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Cast