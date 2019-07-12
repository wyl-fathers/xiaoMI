<template>
  <div>
    <div class="layout">
      <div>
        <div class="lgnheader">
          <div class="header_tit t_c">
            <em id="custom_display_1" class="milogo">
              <svg width="100%" height="100%" version="1.1">
                <rect width="48" height="48" rx="3" ry="3" style="fill:#ff6700" />
                <rect x="10" y="15" width="4.2" height="18" style="fill:#FFFFFF" />
                <rect x="33.75" y="15" width="4.2" height="18" style="fill:#FFFFFF" />
                <rect x="11.25" y="15" width="15" height="4.1" style="fill:#FFFFFF" />
                <rect x="26.2" y="20.55" width="4.2" height="12.5" style="fill:#FFFFFF" />
                <rect
                  x="20.6"
                  y="15"
                  width="9.8"
                  height="9.8"
                  rx="4.4"
                  ry="4.4"
                  style="fill:#FFFFFF"
                />
                <rect x="20.2" y="19" width="6" height="6" rx="2" ry="2" style="fill:#ff6700" />
                <rect x="18" y="19.1" width="4" height="2.2" style="fill:#ff6700" />
                <rect x="24.2" y="23" width="1.94" height="10" style="fill:#ff6700" />
                <rect x="18.1" y="22.8" width="4.2" height="10.2" style="fill:#FFFFFF" />
              </svg>
            </em>
            <h4 class="header_tit_txt" id="login-title">小米帐号登录</h4>
            <div class="site_info"></div>
          </div>
        </div>
      </div>
      <div class="tabs-con tabs_con now" data-con="pwd">
        <div>
          <div class="login_area">
            <form action="/pass/serviceLoginAuth2" method="POST" id="login-main-form">
              <div class="loginbox c_b">
                <!-- 输入框 -->
                <div class="lgn_inputbg c_b login-panel pwdLogin sms_login">
                  <!--验证用户名-->
                  <div class="single_imgarea" id="account-info">
                    <div class="na-img-area" id="account-avator" style="display:none">
                      <div class="na-img-bg-area" id="account-avator-con"></div>
                    </div>
                    <p class="us_name tac" id="account-displayname"></p>
                    <p class="us_id tac"></p>
                  </div>
                  <label
                    id="region-code"
                    class="labelbox login_user c_b disable add_regioncode"
                    for
                  >
                    <div class="turn_area">
                      <!-- <a class="btn_turn" id="manual_code" href="javascript:void(0);" title="关闭国家码"></a> -->
                    </div>
                    <div class="country_list">
                      <div class="animation countrycode_selector" id="countrycode_selector">
                        <span class="country_code">
                          <tt class="countrycode-value" id="countrycode_value">+86</tt>
                          <i class="icon_arrow_down"></i>
                        </span>
                      </div>
                    </div>
                    <input
                      class="item_account"
                      autocomplete="off"
                      type="tel"
                      name="user"
                      id="username"
                      placeholder="手机号码"
                      _type="tel"
                    />
                    <div id="btn-clear-link" class="clear_link_panel">
                      <span class="clear_link"></span>
                    </div>
                  </label>
                  <div class="country-container" id="countrycode_container" style="display: none;">
                    <div class="country_container_con" id="countrycode_container_con"></div>
                  </div>
                  <div id="captcha"></div>
                  <label class="labelbox pwd_panel c_b">
                    <input
                      class="item_account"
                      type="number"
                      placeholder="短信验证码"
                      autocomplete="off"
                      id="pwd"
                      name="password"
                      _type="number"
                    />
                    <input
                      class="item_account"
                      type="text"
                      placeholder="密码"
                      autocomplete="off"
                      id="visiablePwd"
                      name="visiablepwd"
                      style="display:none"
                    />
                    <div class="eye_panel pwd-visiable">
                      <i class="eye pwd-eye">
                        <svg
                          width="100%"
                          height="100%"
                          version="1.1"
                        > 
                          <path class="eye_outer" d="M0 8 C6 0,14 0,20 8, 14 16,6 16, 0 8 z" />
                          <circle class="eye_inner" cx="10" cy="8" r="3" />
                        </svg>
                      </i>
                    </div> 
                    <div id="sms-code-panel" class="code_panel" style="display: block;">
                      <div class="send_ticket" href="javascript:;" id="getSMSCode">获取验证码</div>
                    </div>
                  </label>
                </div>
                 <!-- <div class="security_Controller" style="display: none;">
                  <label class="checkbox_area">
                    <input type="checkbox" id="trustSecurityController" class="checkbox" />使用安全控件
                  </label>
                </div> -->

                <!-- 错误信息 -->
                <div class="err_tip">
                  <div>
                    <em class="icon_error"></em>
                    <span class="error-con"></span>
                  </div>
                </div>
                <div class="btns_bg">
                  <input class="btnadpt" id="login-button" type="submit" value="立即登录/注册" />
                  <span
                    id="custom_display_8"
                    class="sns-default-container sns_default_container"
                    style="display: none;"
                  ></span>
                </div>
                <div class="other_panel clearfix">
                  <span id="custom_display_256" class="sms_link">
                    <div class="btnadpt btn_gray login_type_link" id="ChangeLoginType">用户名密码登录</div>
                  </span>
                  <div class="reverse">
                    <div class="n_links_area" id="custom_display_64" style="display: none;">
                      <div class="outer-link">立即注册</div>
                      <span>|</span>
                      <div class="outer-link">忘记密码？</div>
                    </div>
                  </div>
                  <!-- 其他登录方式 s -->
                  <div
                    style="display: block;"
                    class="other_login_type sns-login-container"
                    id="custom_display_16"
                  >
                    <fieldset class="oth_type_tit">
                      <legend align="center" class="oth_type_txt">其他方式登录</legend>
                    </fieldset>
                    <div id="sns-login-links" class="oth_type_links">
                      <div
                        class="icon_type btn_qq sns-login-link"
                        data-type="qq"
                        title="QQ登录"
                        target="_blank"
                      >
                        <i class="btn_sns_icontype icon_default_qq"></i>
                      </div>
                      <div
                        class="icon_type btn_weibo sns-login-link"
                        data-type="weibo"
                        title="微博登录"
                        target="_blank"
                      >
                        <i class="btn_sns_icontype icon_default_weibo"></i>
                      </div>
                      <div
                        class="icon_type btn_alipay sns-login-link"
                        data-type="alipay"
                        title="支付宝登录"
                        target="_blank"
                      >
                        <i class="btn_sns_icontype icon_default_alipay"></i>
                      </div>
                      <div
                        class="icon_type btn_weixin sns-login-link"
                        data-type="weixin"
                        title="微信登录"
                        target="_blank"
                      >
                        <i class="btn_sns_icontype icon_default_weixin"></i>
                      </div>
                    </div>
                  </div>
                  <!-- 其他登录方式 e -->
                  <p class="acq_tips" style="display: none;"></p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>


<style lang="scss" scoped>
.layout {
  width: 100%;
  margin: 0 auto 30px;
  padding: 0 20px;
  position: relative;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.icon_type {
  width: 30px;
  height: 30px;
  margin: 0 10px;
  display: inline-block;
  text-indent: -9999px;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -o-border-radius: 50%;
  border-radius: 50%;
}
.btnadpt {
  width: 100%;
  padding: 0.1rem 0;
  display: block;
  margin-bottom: 14px;
  text-align: center;
  font-size: 0.18rem;
  color: #fff;
  cursor: pointer;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  -o-border-radius: 6px;
  border-radius: 6px;
  overflow: hidden;
  background-color: #ff6700;
}
.header_tit {
  .c_b:before,
  .c_b:after {
    content: "";
    display: block;
  }
  padding: 30px 0 10px;
  .milogo {
    background-image: url(../../../public/img/milogo.png);
    width: 48px;
    height: 48px;
    margin: 0 auto 15px;
    display: block;
    background-image: -webkit-image-set(
      url(../../../public/img/milogo.png) 1x,
      url(../../../public/img/milogo2x.png) 2x
    );
  }
  .header_tit_txt {
    font-size: 0.18rem;
    color: #000;
    font-weight: normal;
    text-align: center;
  }
}
.tabs_con.now {
  display: block;
  .login_area {
    padding-bottom: 20px;
    .c_b {
      zoom: 1;
      div {
        .na-img-area {
          width: 70px;
          height: 70px;
          border: 2px solid #e3e3e3;
          border-radius: 50%;
          padding: 4px;
          background: #fff;
          position: relative;
          z-index: 4;
          margin: 0 auto 10px;
          .na-img-bg-area {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            overflow: hidden;
          }
        }
      }
      .login_user {
        margin-bottom: 1px;
        .country_list {
          font-size: 0.16rem;
          padding: 0.1rem 10px 0.1rem 0;
          margin-right: 8px;
          display: block;
          overflow: hidden;
          .animation {
            position: relative;
            -webkit-animation: fade-in ease-in-out 0.5s;
            -webkit-animation-name: fade-in;
            animation-name: fade-in;
            -webkit-animation-timing-function: ease-in-out;
            animation-timing-function: ease-in-out;
            -webkit-animation-duration: 0.5s;
            animation-duration: 0.5s;
            .country_code {
              -webkit-box-align: center;

              display: flex;
              align-items: center;
              tt {
                margin-right: 2px;
                color: #9b9b9b;
                font-size: 0.18rem;
                line-height: 0.2rem;
              }
              .icon_arrow_down {
                margin-left: 0.3rem;
                display: block;
                width: 0.07rem;
                height: 0.07rem;
                border-width: 0.01rem;
                border-style: solid;
                border-color: transparent transparent #9b9b9b #9b9b9b;
                -webkit-transform: rotate(-135deg);
                transform: rotate(-135deg);
              }
            }
          }
        }
        input {
          -webkit-box-flex: 1;
          -moz-box-flex: 1;
          box-flex: 1;
          flex-grow: 1;
          width: 100%;
          padding: 0.16rem 0;
          line-height: normal;
          display: block;
          font-size: 0.18rem;
        }
      }
      .labelbox {
        border-bottom: 1px solid #d3d3d3;
        background-color: #fff;
        display: box;
        display: -webkit-box;
        display: -moz-box;
        -webkit-box-align: center;
        box-align: center;
        input {
          -webkit-box-flex: 1;
          -moz-box-flex: 1;
          box-flex: 1;
          flex-grow: 1;
          width: 100%;
          padding: 0.16rem 0;
          line-height: normal;
          display: block;
          font-size: 0.18rem;
        }
      }
    //   .labelbox {
    //     border-bottom: 1px solid #d3d3d3;
    //     background-color: #fff;
    //     display: box;
    //     display: -webkit-box;
    //     display: -moz-box;
    //     -webkit-box-align: center;
    //     box-align: center;
    //     input {
    //       -webkit-box-flex: 1;
    //       -moz-box-flex: 1;
    //       box-flex: 1;
    //       flex-grow: 1;
    //     }
    //     .code_panel {
    //       padding: 0.1rem 20px;
    //       color: #333;
    //       display: block;
    //       overflow: hidden;
    //       display: none;
    //       .send_ticket {
    //         cursor: pointer;
    //         color: #2ea5e5;
    //       }
    //     }
    //   }
    }
    .btns_bg {
      padding-top: 24px;
      .btnadpt {
        width: 100%;
        padding: 0.1rem 0;
        display: block;
        margin-bottom: 14px;
        text-align: center;
        font-size: 0.18rem;
        color: #fff;
        cursor: pointer;
        -webkit-border-radius: 6px;
        -moz-border-radius: 6px;
        -o-border-radius: 6px;
        border-radius: 6px;
        overflow: hidden;
        background-color: #ff6700;
      }
    }
    .clearfix {
      zoom: 1;
      span {
        .btn_gray {
          background: #fff;
          margin-top: 10px;
          border: 1px solid #d3d3d3;
          color: #000;
        }
      }
      .other_login_type {
        padding-top: 40px;
        text-align: center;
        .oth_type_tit {
          border-bottom: 0;
          border-left: 0;
          border-right: 0;
          border-top: 1px solid #f2f2f2;
          padding-top: 10px;
          .oth_type_txt {
            font-size: 0.12rem;
            color: #b0b0b0;
            width: 80px;
          }
        }
        .oth_type_links {
          padding-top: 10px;
          text-align: center;
          display: box;
          display: -webkit-box;
          display: -moz-box;
          -webkit-box-pack: center;
          box-pack: center;
          .btn_qq {
            display: none;
          }
          .btn_weibo {
            background-color: #ed9090;
          }
          .btn_alipay {
            background-color: #6bb6ea;
          }
          .btn_weixin {
            background-color: #00be00;
          }
        }
      }
    }
  }
}
</style>
