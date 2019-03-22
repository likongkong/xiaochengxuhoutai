<template>
  <!-- <div class="mx-iframe-body" style="min-width: 1030px;"> -->
  <div id="js_mxVue">
    <!-- <div class="mx-page-header decorate-header-fixed">
            <h1 class="mx-page-title"><a href="javascript:history.go(-1);" class="mx-page-back"><i class="mx-page-back-icon"></i>返回</a>
                <span>编辑小程序</span> <span> | </span> <span>(未授权)</span>
                <div class="pull-right"><button type="button" class="btn btn-primary btn-sm">保存</button></div>
            </h1>
            <div class="mx-page-explain text-ellipsis">当前状态：<span title="点击查看详情" id="js_statusTxt" class="cursor-pointer"
                    style="color: rgb(76, 174, 76);">品牌未绑定小程序</span></div>
    </div>-->
    <div class="pull-right" style=" position: fixed;top: 0;right: 0;">
      <button type="button" class="btn btn-primary btn-sm" @click="fnSubmit('SAVE');">保存</button>
    </div>

    <div class="decorate-content">
      <!-- left  内容 -->
      <div class="decorate-aside-group">
        <div class="decorate-aside-header">
          <h3 class="aside-title">小程序</h3>
          <div class="aside-tab">
            <a href="javascript:void(0);" class="aside-tab-name aside-active">组件</a>
          </div>
        </div>
        <div class="decorate-module-select-group">
          <div class="mx-sub-header">
            <h2 class="mx-sub-title">会员信息</h2>
          </div>
          <div class="module-box">
            <img src="http://www.xiaoairenbase.cn/likongkong/head.png" alt>
          </div>
          <div class="module-select-box">
            <button
              type="button"
              class="btn btn-primary module-btn"
              @click="fnModuleSelect('member')"
            >选择使用</button>
          </div>
        </div>
        <div class="decorate-module-select-group">
          <div class="mx-sub-header">
            <h2 class="mx-sub-title">图片轮播</h2>
          </div>
          <div class="module-box">
            <img src="https://pos.weifrom.com/static/common/images/micro/banner/b_01.jpg" alt>
          </div>
          <div class="module-select-box">
            <button
              type="button"
              class="btn btn-primary module-btn"
              @click="fnModuleSelect('banner')"
            >选择使用</button>
          </div>
        </div>
        <div class="decorate-module-select-group">
          <div class="mx-sub-header">
            <h2 class="mx-sub-title">功能列表</h2>
          </div>
          <div class="module-box">
            <img src="https://pos.weifrom.com/static/common/images/micro/preview/p_01.png" alt>
          </div>
          <div class="module-select-box">
            <button
              type="button"
              class="btn btn-primary module-btn"
              @click="fnModuleSelect('btnMenu')"
            >选择使用</button>
          </div>
        </div>
        <div class="decorate-module-select-group">
          <div class="mx-sub-header">
            <h2 class="mx-sub-title">品牌介绍</h2>
          </div>
          <div class="module-box">
            <img src="https://pos.weifrom.com/static/common/images/micro/preview/p_02.jpg" alt>
          </div>
          <div class="module-select-box">
            <button
              type="button"
              class="btn btn-primary module-btn"
              @click="fnModuleSelect('brandIntro')"
            >选择使用</button>
          </div>
        </div>
        <!-- <div class="decorate-module-select-group">
          <div class="mx-sub-header">
            <h2 class="mx-sub-title">功能服务</h2>
          </div>
          <div class="module-box">
            <img src="https://pos.weifrom.com/static/common/images/micro/preview/p_03.jpg" alt>
          </div>
          <div class="module-select-box">
            <button type="button" class="btn btn-primary module-btn">选择使用</button>
          </div>
        </div>-->
        <div class="decorate-module-select-group">
          <div class="mx-sub-header">
            <h2 class="mx-sub-title">门店信息</h2>
          </div>
          <div class="module-box">
            <img src="https://pos.weifrom.com/static/common/images/micro/preview/p_04.jpg" alt>
          </div>
          <div class="module-select-box">
            <button
              type="button"
              class="btn btn-primary module-btn"
              @click="fnModuleSelect('shopIntro')"
            >选择使用</button>
          </div>
        </div>
        <div class="decorate-module-select-group">
          <div class="mx-sub-header">
            <h2 class="mx-sub-title">门店图片</h2>
          </div>
          <div class="module-box">
            <img src="https://pos.weifrom.com/static/common/images/micro/preview/p_05.jpg" alt>
          </div>
          <div class="module-select-box">
            <button
              type="button"
              class="btn btn-primary module-btn"
              @click="fnModuleSelect('shopPic')"
            >选择使用</button>
          </div>
        </div>
        <!-- <div class="decorate-module-select-group">
          <div class="mx-sub-header">
            <h2 class="mx-sub-title">自定义图片</h2>
          </div>
          <div class="module-box">
            <img src="https://pos.weifrom.com/static/common/images/micro/preview/p_06.jpg" alt>
          </div>
          <div class="module-select-box">
            <button type="button" class="btn btn-primary module-btn">选择使用</button>
          </div>
        </div>-->
        <div class="decorate-module-select-group">
          <div class="mx-sub-header">
            <h2 class="mx-sub-title">优惠卡券</h2>
          </div>
          <div class="module-box">
            <img src="https://pos.weifrom.com/static/common/images/micro/preview/p_07.jpg" alt>
          </div>
          <div class="module-select-box">
            <button
              type="button"
              class="btn btn-primary module-btn"
              @click="fnModuleSelect('couponCard')"
            >选择使用</button>
          </div>
        </div>
      </div>

      <!-- center 内容 -->
      <div class="decorate-center-group">
        <div class="center-topbar"></div>
        <div class="center-title" @click="fnModuleEdit('pageSetting')">{{setting.title}}</div>
        <div class="decorate-center-main">
          <draggable v-model="datas" @update="datadragEnd">
            <div v-for="(item,key) in datas" :key="key">
              <!-- 会员信息 -->
              <div v-if="item.type == 'member'" @click="fnModuleEdit(item,key)">
                <div
                  class="decorate-module-preview-group hide-swiper-pagination"
                  :class="{'active':currentKey==key}"
                >
                  <div title="按住鼠标，可拖动排序模块" class="preview-drag">
                    <i class="fa fa-arrows"></i>
                  </div>
                  <div>
                    <img
                        :src="item.imageUrl"
                        alt
                        :style="{'width':'100%'}"
                      >
                  </div>
                </div>
              </div>
              <!-- 轮播图 -->
              <div v-if="item.type == 'banner'" @click="fnModuleEdit(item,key)">
                <div
                  class="decorate-module-preview-group hide-swiper-pagination"
                  :class="{'active':currentKey==key}"
                >
                  <div title="按住鼠标，可拖动排序模块" class="preview-drag">
                    <i class="fa fa-arrows"></i>
                  </div>

                  <div class="swiper-container preview-box">
                    <div class="swiper-wrapper">
                      <div
                        class="swiper-slide"
                        v-for="(subItem) in item.list"
                        style="width: 375px;"
                      >
                        <img
                          :src="subItem.imageUrl"
                          alt
                          :style="{'height':item.imgHeight+'px','width':'100%'}"
                        >
                      </div>
                      <div class="jsPagination_01" slot="pagination"></div>
                    </div>
                  </div>
                  <!-- <swiper class="preview-box">
                    <swiper-slide v-for="(subItem) in item.imageUrl" style="width: 375px;">
                    </swiper-slide>
                  </swiper>-->
                  <!-- <img :src="subItem" alt="" style="height: 164px; width: 100%;">     -->
                  <!-- <span>{{item.imageUrl[0]}}</span> -->
                  <!-- <div class="swiper-container preview-box swiper-container-horizontal" style="height: 164px;">
                  <div class="swiper-wrapper" style="transform: translate3d(0px, 0px, 0px);">-->
                  <!-- <div v-for="(subItem) in item.imageUrl" style="width: 375px;"><img :src="subItem"alt="" style="height: 164px; width: 100%;"/></div> -->
                  <!-- </div>
                                    <div class="jsPagination_01 swiper-pagination-bullets"><span class="swiper-pagination-bullet swiper-pagination-bullet-active"></span></div>
                                    <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                  </div>-->
                </div>
              </div>
              <!-- 门店图片 -->
              <div v-else-if="item.type == 'shopPic'" @click="fnModuleEdit(item,key)">
                <div
                  class="decorate-module-preview-group decorate-micro-group decorate-shop-pic-preview-group"
                  :class="{'active':currentKey==key}"
                >
                  <div title="按住鼠标，可拖动排序模块" class="preview-drag">
                    <i class="fa fa-arrows"></i>
                  </div>
                  <h3 class="micro-group-title">门店图片</h3>
                  <ul class="dsp-list clearfix">
                    <li v-for="(data) in item.list" class="dsp-li">
                      <img :src="data.imageUrl" alt="门店图片" class="dsp-pic">
                    </li>
                  </ul>
                </div>
              </div>
              <!-- 功能列表 -->
              <div v-else-if="item.type == 'btnMenu'" @click="fnModuleEdit(item,key)">
                <div class="decorate-module-preview-group" :class="{'active':currentKey==key}">
                  <div title="按住鼠标，可拖动排序模块" class="preview-drag">
                    <i class="fa fa-arrows"></i>
                  </div>
                  <div
                    class="preview-box clearfix decorate-module-list-group"
                    @click="fnScrollEditPositon(item,key);"
                  >
                    <div
                      class="hml-li"
                      v-for="(items,key) in item.list"
                      :style="{'float':items.row&&items.row == 2?'right':'left'}"
                    >
                      <div class="hml-item">
                        <div
                          class="hml-table-cell"
                          :style="{'height':items.row&&items.row == 2?176+'px':84+'px'}"
                        >
                          <img v-if="items.imageUrl" :src="items.imageUrl" class="hml-image">
                          <div class="hml-box">
                            <div class="hml-title">{{items.title}}</div>
                            <div class="hml-txt">{{items.subTitle}}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- 品牌介绍 -->
              <div v-else-if="item.type == 'brandIntro'" @click="fnModuleEdit(item,key)">
                <div
                  class="decorate-module-preview-group decorate-brand-preview-group"
                  :class="{'active':currentKey==key}"
                >
                  <div title="按住鼠标，可拖动排序模块" class="preview-drag">
                    <i class="fa fa-arrows"></i>
                  </div>
                  <div class="brand-header">
                    <img :src="item.brandCover" alt="背景图" class="bh-img">
                    <div class="bh-box">
                      <img :src="item.brandLogo" alt="logo" class="bh-logo">
                      <div class="bh-name">{{item.brandName}}</div>
                    </div>
                  </div>
                  <div class="decorate-micro-group brand-intro-group">
                    <h3 class="micro-group-title">品牌介绍</h3>
                    <div class="bi-box">
                      <div class="bi-info">{{item.brandInfo}}</div>
                      <ul class="bi-list">
                        <li class="bi-li">
                          <img
                            src="https://pos.weifrom.com/static/common/images/micro/default/2_02.png"
                            alt
                            class="bi-icon"
                          >
                          <span class="bi-l-title">成立时间</span>
                          <span class="bi-l-msg">{{clData}}</span>
                        </li>
                        <li class="bi-li">
                          <img
                            src="https://pos.weifrom.com/static/common/images/micro/default/2_03.png"
                            alt
                            class="bi-icon"
                          >
                          <span class="bi-l-title">成立地点</span>
                          <span class="bi-l-msg">{{item.brandAddress}}</span>
                        </li>
                        <li class="bi-li">
                          <img
                            src="https://pos.weifrom.com/static/common/images/micro/default/2_04.png"
                            alt
                            class="bi-icon"
                          >
                          <span class="bi-l-title">主营业务</span>
                          <span class="bi-l-msg">{{item.brandBusiness}}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <!-- 门店信息 -->
              <div v-else-if="item.type == 'shopIntro'" @click="fnModuleEdit(item,key)">
                <div
                  class="decorate-module-preview-group decorate-micro-group decorate-shop-info-preview-group"
                  :class="{'active':currentKey==key}"
                >
                  <div title="按住鼠标，可拖动排序模块" class="preview-drag">
                    <i class="fa fa-arrows"></i>
                  </div>
                  <h3 class="micro-group-title">门店信息</h3>
                  <ul class="dsi-list">
                    <li class="dsi-item" v-for="(items,key) in item.list">
                      <div class="dsi-i-name">
                        <span>{{items.shopName}}</span>
                        <div class="dsi-i-abs">
                          <img
                            src="https://pos.weifrom.com/static/common/images/micro/brand/phone_icon.png"
                            alt
                            class="dsi-i-icon"
                            draggable="false"
                          >
                        </div>
                      </div>
                      <div class="dsi-i-address">{{items.shopSite}}</div>
                      <div class="dsi-i-date">{{items.bData}} {{items.bHours}}</div>
                    </li>
                  </ul>
                </div>
              </div>

              <!-- 优惠券 -->
              <div v-else-if="item.type == 'couponCard'" @click="fnModuleEdit(item,key)">
                <div
                  class="decorate-module-preview-group decorate-micro-group decorate-shop-pic-preview-group"
                  :class="{'active':currentKey==key}"
                >
                  <div title="按住鼠标，可拖动排序模块" class="preview-drag">
                    <i class="fa fa-arrows"></i>
                  </div>
                  <h3 class="micro-group-title" style="position: relative;z-index: 220;">
                    <span
                      style="margin-right:20px"
                      v-for="(item,key) in item.style=='across'?item.acrossItems:item.verticalItems"
                      @click="btnCouponTabbar(key)"
                    >{{item.title}}</span>
                  </h3>
                  <!-- item.style=='across'?:0 -->

                  <div
                    class="coupons"
                    v-for="(item1,key) in item.style=='across'?item.acrossItems:item.verticalItems"
                    :class="key == (item.style=='across'?couponTabbarKey:0) ?'': 'hide'"
                  >
                    <div class="coupons-card" v-for="(item2,key) in item1.list">
                      <div class="coupons-img coupons-red">
                        <div class="coupons-lines">
                          <img
                            :src="item2.url"
                            alt
                            class="dsi-i-icon"
                            style="width:100%"
                          >
                        </div>
                      </div>
                      <div class="coupons-info">
                        <div class="coupons-title">{{item2.title}}</div>
                        <div>
                          <div class="coupons-type">{{item2.type}}</div>
                          <div class="coupons-subtitle">{{item2.description}}</div>
                        </div>
                      </div>
                      <span class="coupons-get">领取</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </draggable>
        </div>
        <div class="decorate-footer">
          <div class="df-item">
            <img
              src="https://pos.weifrom.com/static/common/images/micro/footer_icon/f_01.png"
              alt
              class="df-icon"
            >
            <h5 class="df-title">首页</h5>
          </div>
          <div class="df-item">
            <img
              src="https://pos.weifrom.com/static/common/images/micro/footer_icon/f_02.png"
              alt
              class="df-icon"
            >
            <h5 class="df-title">会员</h5>
          </div>
        </div>
      </div>

      <!-- right  内容 -->
      <!-- 页面设置 -->
      <div class="decorate-aside-group aside-right" v-if="currentType == 'pageSetting'">
        <div class="decorate-aside-header">
          <h3 class="aside-title">页面设置</h3>
        </div>
        <div class="p20">
          <div class="decorate-form-group">
            <label class="dfg-label">页面标题：</label>
            <div class="dfg-control-box">
              <input type="text" class="form-control" maxlength="10" v-model.trim="setting.title">
            </div>
          </div>
          <div class="decorate-form-group">
            <label class="dfg-label">分享标题：</label>
            <div class="dfg-control-box">
              <input type="text" class="form-control" maxlength="10">
            </div>
          </div>
          <div class="decorate-form-group hide">
            <label class="dfg-label">分享内容：</label>
            <div class="dfg-control-box">
              <input type="text" class="form-control" maxlength="10">
            </div>
          </div>
          <h5 style="margin-top: 30px;">其他设置</h5>
          <div class="decorate-form-group" style="margin-bottom: 15px;">
            <label class="dfg-label">支付后跳转：</label>
            <div class="dfg-control-box">
              <div>
                <label class="radio-inline brand-radio" style="margin: 8px 5px 0 0;">
                  <input type="radio" value="default">
                  <span>默认</span>
                </label>
                <label class="radio-inline brand-radio" style="margin: 8px 5px 0 0;">
                  <input type="radio" value="webview">
                  <span>内部跳转</span>
                </label>
                <label class="radio-inline brand-radio" style="margin: 8px 5px 0 0;">
                  <input type="radio" value="mini">
                  <span>跳转小程序</span>
                </label>
              </div>
            </div>
          </div>
          <div class="decorate-form-group">
            <label class="dfg-label">链接：</label>
            <div class="dfg-control-box">
              <select class="form-control">
                <option value>无</option>
                <!-- <option :value="sItem.key" v-for="(sItem,sIndex) in aLinkList" v-if="sItem.key != 'share_to_member'">{{sItem.name}}</option> -->
              </select>
            </div>
          </div>
          <div class="decorate-form-group">
            <label class="dfg-label">AppID：</label>
            <div class="dfg-control-box">
              <input type="text" class="form-control" placeholder="小程序AppID" maxlength="64">
            </div>
          </div>
          <div class="decorate-form-group">
            <label class="dfg-label">路径：</label>
            <div class="dfg-control-box">
              <input type="text" class="form-control" placeholder="小程序页面路径，空则打开首页" maxlength="64">
            </div>
          </div>
        </div>
      </div>
      <div class="decorate-aside-group aside-right" v-if="currentType == 'member'">
        <div class="decorate-aside-header">
          <h3 class="aside-title">会员信息</h3>
          <div class="aside-tab">
            <a title="删除模块" class="aside-delete" @click="fnModuleDel();">删除</a>
          </div>
        </div>
        <div class="p20" style="color: #dd4545;">
          *开发中
        </div>
      </div>
      <!-- 编辑轮播图模块 -->
      <div class="decorate-aside-group aside-right" v-if="currentType == 'banner'">
        <div class="decorate-aside-header">
          <h3 class="aside-title">图片轮播</h3>
          <div class="aside-tab">
            <a title="删除模块" class="aside-delete" @click="fnModuleDel();">删除</a>
          </div>
        </div>
        <div class="decorate-aside-control-box">
          <div class="upload-file-group-btn">
            <input
              type="file"
              accept="image/jpeg, image/jpg, image/png"
              class="upload-file"
              id="js_coverUploadBg"
              @change="fnUploadPreview({dom:$event.target,type:'BANNER_ADD'})"
            >
            <button type="button" class="btn btn-primary upload-btn">添加更多轮播图</button>
          </div>
        </div>
        <div class="decorate-form-group decorate-edit-banner-height-group">
          <label class="dfg-label">轮播图高度：</label>
          <div class="b-box">
            <input
              type="range"
              min="5"
              v-model="datas[currentKey].imgHeight"
              max="999"
              step="5"
              class="form-control b-range"
            >
            <input
              type="text"
              maxlength="3"
              class="form-control b-text"
              v-model="datas[currentKey].imgHeight"
            >
          </div>
          <p
            class="form-control-hint"
            style="margin-top: 15px; color: rgb(212, 43, 43);"
          >图片默认尺寸为750x328。
            <br>轮播图高度计算： 轮播图高度 = (图片高度*375)/图片宽度。
            <br>例如：上传图片宽高为750*328，则轮播图高度应为（328*375)/750 = 164。
          </p>
        </div>
        <div>
          <div
            class="decorate-edit-group decorate-edit-banner-group"
            v-for="(bItem,bIndex) in datas[currentKey].list"
          >
            <div class="edit-box">
              <div class="edit-control" title="删除" @click="fnModuleItemDel(bIndex);">
                <i class="fa fa-close edit-trash"></i>
              </div>
              <!-- <div class="edit-control" title="拖动">
                <i class="fa fa-arrows edit-arrows"></i>
              </div>-->
            </div>
            <div class="edit-content">
              <div class="decorate-form-group l-w60">
                <label class="dfg-label">轮播图：</label>
                <div class="dfg-control-box">
                  <div title="点击更换图片" class="brand-crop-view" style="height: 100px;">
                    <input
                      type="file"
                      class="edit-file"
                      @change="fnUploadPreview({dom:$event.target,type:'BANNER_EDIT',index:bIndex})"
                    >
                    <img :src="bItem.imageUrl" alt="图片" class="view-img">
                    <div class="view-del-box">
                      <span>更换图片</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="decorate-form-group l-w60">
                <label class="dfg-label">跳转：</label>
                <div class="dfg-control-box">
                  <div style="height: 34px; line-height: 34px;">
                    <label class="radio-inline brand-radio">
                      <input type="radio" value="webview" v-model="bItem.openType">
                      <span>内部跳转</span>
                    </label>
                    <label class="radio-inline brand-radio">
                      <input type="radio" value="mini" v-model="bItem.openType">
                      <span>跳转小程序</span>
                    </label>
                  </div>
                </div>
              </div>
              <div class="decorate-form-group l-w60" v-if="bItem.openType == 'webview'">
                <label class="dfg-label">链接：</label>
                <div class="dfg-control-box">
                  <select class="form-control">
                    <option value>无</option>
                  </select>
                </div>
              </div>
              <div class="decorate-form-group l-w60" v-if="bItem.openType == 'mini'">
                <label class="dfg-label">AppID：</label>
                <div class="dfg-control-box">
                  <input type="text" class="form-control" placeholder="小程序AppID" maxlength="64">
                </div>
              </div>
              <div class="decorate-form-group l-w60" v-if="bItem.openType == 'mini'">
                <label class="dfg-label">路径：</label>
                <div class="dfg-control-box">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="小程序页面路径，空则打开首页"
                    maxlength="64"
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 编辑功能列表模块 -->
      <div class="decorate-aside-group aside-right" v-if="currentType == 'btnMenu'">
        <div class="decorate-aside-header">
          <h3 class="aside-title">功能列表</h3>
          <div class="aside-tab">
            <a title="删除模块" class="aside-delete" @click="fnModuleDel();">删除</a>
          </div>
        </div>
        <div class="decorate-aside-control-box">
          <button class="btn btn-primary" @click="fnModuleAdd('MODULE_ADD');">添加功能模块</button>
        </div>
        <div>
          <div
            class="decorate-edit-group decorate-edit-modult-group js_editItem"
            v-for="(bItem,bIndex) in datas[currentKey].list"
          >
            <div class="edit-box">
              <div title="删除" class="edit-control" @click="fnModuleItemDel(bIndex);">
                <i class="fa fa-close edit-trash"></i>
              </div>
              <!-- <div title="拖动" class="edit-control">
                <i class="fa fa-arrows edit-arrows"></i>
              </div>-->
            </div>
            <div class="edit-content">
              <div class="decorate-form-group l-w60">
                <label class="dfg-label">图标：</label>
                <div class="dfg-control-box">
                  <div title="点击更换图标" class="brand-crop-view">
                    <input
                      type="file"
                      class="edit-file"
                      @change="fnUploadPreview({dom:$event.target,type:'BTN_MENU_ICON_EDIT',index:bIndex})"
                    >
                    <img
                      :src="bItem.imageUrl&&bItem.imageUrl!=''?bItem.imageUrl:'https://pos.weifrom.com/static/common/images/common/upload_pic.jpg'"
                      alt="图片"
                      class="view-img"
                    >
                    <div
                      class="view-del-box view-del"
                      @click.stop="fnUploadFileDel({type:'BTN_MENU_ICON',index:bIndex});"
                      v-if="bItem.imageUrl&&bItem.imageUrl!=''"
                    >
                      <span>删除</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="decorate-form-group l-w60">
                <label class="dfg-label">名称：</label>
                <div class="dfg-control-box">
                  <input type="text" maxlength="6" class="form-control" v-model.trim="bItem.title">
                </div>
              </div>
              <div class="decorate-form-group l-w60">
                <label class="dfg-label">描述：</label>
                <div class="dfg-control-box">
                  <input
                    type="text"
                    maxlength="6"
                    class="form-control"
                    v-model.trim="bItem.subTitle"
                  >
                </div>
              </div>
              <div class="decorate-form-group l-w60">
                <label class="dfg-label">跳转：</label>
                <div class="dfg-control-box">
                  <div style="height: 34px; line-height: 34px;">
                    <label class="radio-inline brand-radio">
                      <input type="radio" value="webview" v-model="bItem.openType">
                      <span>内部跳转</span>
                    </label>
                    <label class="radio-inline brand-radio">
                      <input type="radio" value="mini" v-model="bItem.openType">
                      <span>跳转小程序</span>
                    </label>
                  </div>
                </div>
              </div>
              <div class="decorate-form-group l-w60" v-if="bItem.openType == 'webview'">
                <label class="dfg-label">链接：</label>
                <div class="dfg-control-box">
                  <select class="form-control">
                    <option value>无</option>
                  </select>
                </div>
              </div>
              <div class="decorate-form-group l-w60" v-if="bItem.openType == 'mini'">
                <label class="dfg-label">AppID：</label>
                <div class="dfg-control-box">
                  <input type="text" class="form-control" placeholder="小程序AppID" maxlength="64">
                </div>
              </div>
              <div class="decorate-form-group l-w60" v-if="bItem.openType == 'mini'">
                <label class="dfg-label">路径：</label>
                <div class="dfg-control-box">
                  <input
                    type="text"
                    placeholder="小程序页面路径，空则打开首页	"
                    maxlength="64"
                    class="form-control"
                  >
                </div>
              </div>
              <div class="decorate-form-group l-w60">
                <label class="dfg-label">占位：</label>
                <div class="dfg-control-box">
                  <select class="form-control" v-model.trim="bItem.row">
                    <option value="1">1列（默认）</option>
                    <option value="2">2列</option>
                  </select>
                </div>
              </div>
              <!-- <div class="decorate-form-group l-w60">
                <label class="dfg-label">背景色：</label>
                <div class="dfg-control-box">
                  <div class="form-control">
                    <div
                      style="float: left; width: 20px; height: 20px; display: inline-block; margin-right: 5px; background-color: rgb(55, 148, 243);"
                    ></div>#3794f3
                  </div>
                </div>
              </div>-->
              <!-- <div class="decorate-form-group l-w60">
                <label class="dfg-label">背景图：</label>
                <div class="dfg-control-box">
                  <div class="brand-crop-view">
                    <input type="file" class="edit-file">
                    <img
                      src="https://pos.weifrom.com/static/common/images/common/upload_pic.jpg"
                      alt="图片"
                      title="点击更换背景图"
                      class="view-img"
                    >
                    <div title="删除" class="view-del-box view-del" style="display: none;">
                      <span>删除</span>
                    </div>
                  </div>
                </div>
              </div>-->
            </div>
          </div>
        </div>
      </div>

      <!-- 编辑门店图片模块 -->
      <div class="decorate-aside-group aside-right" v-if="currentType == 'shopPic'">
        <div class="decorate-aside-header">
          <h3 class="aside-title">门店图片</h3>
          <div class="aside-tab">
            <a title="删除模块" class="aside-delete" @click="fnModuleDel();">删除</a>
          </div>
        </div>
        <div class="decorate-aside-control-box">
          <div class="upload-file-group-btn">
            <input
              type="file"
              accept="image/jpeg, image/jpg, image/png"
              class="upload-file"
              @change="fnUploadPreview({dom:$event.target,type:'SHOP_PIC_ADD'})"
            >
            <button type="button" class="btn btn-primary upload-btn">添加更多图片</button>
          </div>
        </div>
        <div>
          <div class="edit-content" v-for="(bItem,bIndex) in datas[currentKey].list">
            <div class="decorate-edit-group">
              <div class="edit-box">
                <div title="删除" class="edit-control" @click="fnModuleItemDel(bIndex)">
                  <i class="fa fa-close edit-trash"></i>
                </div>
                <!-- <div title="拖动" class="edit-control">
                  <i class="fa fa-arrows edit-arrows"></i>
                </div>-->
              </div>
              <div class="edit-content">
                <div class="decorate-form-group l-w60">
                  <label class="dfg-label">图片：</label>
                  <div class="dfg-control-box">
                    <div title="点击更换图标" class="mx-upload-group">
                      <input
                        type="file"
                        class="upload-file"
                        @change="fnUploadPreview({dom:$event.target,type:'SHOP_PIC_EDIT',index:bIndex})"
                      >
                      <img :src="bItem.imageUrl" alt="图片" class="upload-img">
                      <div class="upload-del z-sm">
                        <span>更换图片</span>
                      </div>
                    </div>
                    <p class="form-control-hint">图片建议尺寸：大小不超过300K</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 编辑门店信息模块 -->
      <div class="decorate-aside-group aside-right" v-if="currentType == 'shopIntro'">
        <div class="decorate-aside-header">
          <h3 class="aside-title">门店信息</h3>
          <div class="aside-tab">
            <a title="删除模块" class="aside-delete" @click="fnModuleDel();">删除</a>
          </div>
        </div>
        <div class="decorate-aside-control-box">
          <div class="upload-file-group-btn">
            <button
              type="button"
              class="btn btn-primary upload-btn"
              @click="fnShopIntro({dom:$event.target,type:'SHOP_INTRO_ADD'})"
            >添加更多门店</button>
          </div>
        </div>
        <div>
          <div
            class="decorate-edit-group decorate-edit-banner-group"
            v-for="(bItem,bIndex) in datas[currentKey].list"
          >
            <div class="edit-box">
              <div class="edit-control" title="删除" @click="fnModuleItemDel(bIndex);">
                <i class="fa fa-close edit-trash"></i>
              </div>
              <!-- <div class="edit-control" title="拖动">
                <i class="fa fa-arrows edit-arrows"></i>
              </div>-->
            </div>
            <div class="edit-content">
              <div class="decorate-form-group">
                <label class="dfg-label">门店名字：</label>
                <div class="dfg-control-box">
                  <input
                    type="text"
                    maxlength="16"
                    class="form-control"
                    v-model.trim="bItem.shopName"
                  >
                </div>
              </div>
              <div class="decorate-form-group">
                <label class="dfg-label">门店地址：</label>
                <div class="dfg-control-box">
                  <input
                    type="text"
                    maxlength="16"
                    class="form-control"
                    v-model.trim="bItem.shopSite"
                  >
                </div>
              </div>
              <div class="decorate-form-group">
                <label class="dfg-label">营业日期：</label>
                <div class="dfg-control-box">
                  <input type="text" maxlength="16" class="form-control" v-model.trim="bItem.bData">
                </div>
              </div>
              <div class="decorate-form-group">
                <label class="dfg-label">营业时间：</label>
                <div class="dfg-control-box">
                  <input
                    type="text"
                    maxlength="16"
                    class="form-control"
                    v-model.trim="bItem.bHours"
                  >
                </div>
              </div>
              <div class="decorate-form-group">
                <label class="dfg-label">手机或固话：</label>
                <div class="dfg-control-box">
                  <input
                    type="text"
                    maxlength="16"
                    class="form-control"
                    v-model.trim="bItem.mobile"
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 编辑品牌介绍模块 -->
      <div class="decorate-aside-group aside-right" v-if="currentType == 'brandIntro'">
        <div class="decorate-aside-header">
          <h3 class="aside-title">品牌介绍</h3>
          <div class="aside-tab">
            <a title="删除模块" class="aside-delete" @click="fnModuleDel();">删除</a>
          </div>
        </div>
        <div class="edit-content p20">
          <div class="decorate-form-group">
            <label class="dfg-label">标题：</label>
            <div class="dfg-control-box">
              <input
                type="text"
                maxlength="14"
                class="form-control"
                v-model.trim="datas[currentKey].brandName"
              >
            </div>
          </div>
          <div class="decorate-form-group">
            <label class="dfg-label">Logo：</label>
            <div class="dfg-control-box">
              <div title="点击更换Logo" class="mx-upload-group">
                <input
                  type="file"
                  class="upload-file"
                  @change="fnUploadPreview({dom:$event.target,type:'BRAND_LOGO_EDIT'})"
                >
                <img
                  :src="datas[currentKey].brandLogo || datas[currentKey].brandLogo!=''?datas[currentKey].brandLogo:'https://pos.weifrom.com/static/common/images/common/upload_pic.jpg'"
                  alt="图片"
                  class="upload-img"
                >
                <div
                  class="upload-del z-sm"
                  :style="datas[currentKey].brandLogo || datas[currentKey].brandLogo!=''?datas[currentKey].brandLogo:'display:none'"
                >
                  <span>更换图片</span>
                </div>
              </div>
              <p class="form-control-hint">图片建议尺寸：大小不超过100K</p>
            </div>
          </div>
          <div class="decorate-form-group">
            <label class="dfg-label">封面图：</label>
            <div class="dfg-control-box">
              <div title="点击更换图片" class="mx-upload-group w-auto">
                <input
                  type="file"
                  class="upload-file"
                  @change="fnUploadPreview({dom:$event.target,type:'BRAND_COVER_EDIT'})"
                >
                <img :src="datas[currentKey].brandCover" alt="图片" class="upload-img">
                <div class="upload-del z-sm">
                  <span>更换图片</span>
                </div>
              </div>
              <p class="form-control-hint">默认尺寸：750x336，图片高度自适应但不低于170px。</p>
            </div>
          </div>
          <div class="decorate-form-group">
            <label class="dfg-label">简介：</label>
            <div class="dfg-control-box">
              <textarea
                class="form-control"
                style="height: 200px;"
                v-model.trim="datas[currentKey].brandInfo"
              ></textarea>
            </div>
          </div>
          <div class="decorate-form-group">
            <label class="dfg-label">成立时间：</label>
            <div class="dfg-control-box">
              <el-date-picker
                v-model="clData"
                type="date"
                value-format="yyyy-MM-dd"
                placeholder="选择日期">
              </el-date-picker>
            </div>
          </div>
          <div class="decorate-form-group">
            <label class="dfg-label">成立地点：</label>
            <div class="dfg-control-box">
              <input
                type="text"
                maxlength="15"
                class="form-control"
                v-model.trim="datas[currentKey].brandAddress"
              >
            </div>
          </div>
          <div class="decorate-form-group">
            <label class="dfg-label">主营业务：</label>
            <div class="dfg-control-box">
              <input
                type="text"
                maxlength="15"
                class="form-control"
                v-model.trim="datas[currentKey].brandBusiness"
              >
            </div>
          </div>
        </div>
      </div>

      <!-- 编辑卡券模块 -->
      <div class="decorate-aside-group aside-right" v-if="currentType == 'couponCard'">
        <div class="decorate-aside-header">
          <h3 class="aside-title">优惠卡券</h3>
          <div class="aside-tab">
            <a title="删除模块" class="aside-delete" @click="fnModuleDel();">删除</a>
          </div>
        </div>
        <div class="decorate-aside-control-box" v-if="datas[currentKey].style=='across'">
          <button
            class="btn btn-primary"
            @click="fnCouponList({dom:$event.target,type:'COUPON_LIST_ADD'})"
          >添加列表模块</button>
        </div>
        <div class="edit-content p20">
          <div class="decorate-form-group" style="margin-bottom: 15px;">
            <label class="dfg-label">排版样式：</label>
            <div class="dfg-control-box">
              <div>
                <label class="radio-inline brand-radio" style="margin: 8px 5px 0px 0px;">
                  <input type="radio" value="across" v-model="datas[currentKey].style">
                  <span>横向排列</span>
                </label>
                <label class="radio-inline brand-radio" style="margin: 8px 5px 0px 0px;">
                  <input type="radio" value="vertical" v-model="datas[currentKey].style">
                  <span>竖向排列</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div
          class="decorate-edit-group decorate-edit-modult-group js_editItem"
          v-for="(item,bIndex) in datas[currentKey].style=='across'?datas[currentKey].acrossItems:datas[currentKey].verticalItems"
        >
          <div class="edit-box">
            <div title="删除" class="edit-control" @click="fnModuleItemDel(bIndex,currentType);">
              <i class="fa fa-close edit-trash"></i>
            </div>
          </div>
          <div class="edit-content">
            <div class="decorate-form-group">
              <label class="dfg-label">列表名称：</label>
              <div class="dfg-control-box">
                <input type="text" maxlength="6" class="form-control" v-model="item.title">
              </div>
            </div>
            <div class="decorate-form-group">
              <label class="dfg-label">列表样式：</label>
              <div class="dfg-control-box">
                <div style="height: 34px; line-height: 34px;">
                  <label class="radio-inline brand-radio">
                    <input type="radio" value="1" v-model="item.couponStyleType">
                    <span>单行单列</span>
                  </label>
                  <label class="radio-inline brand-radio">
                    <input type="radio" value="2" v-model="item.couponStyleType">
                    <span>大图模式</span>
                  </label>
                </div>
                <div style="height: 34px; line-height: 34px;">
                  <label class="radio-inline brand-radio">
                    <input type="radio" value="3" v-model="item.couponStyleType">
                    <span>横向滑动</span>
                  </label>
                  <label class="radio-inline brand-radio">
                    <input type="radio" value="4" v-model="item.couponStyleType">
                    <span>横向大图</span>
                  </label>
                </div>
              </div>
            </div>
            <div class="decorate-aside-control-box" style="border:none">
              <button
                class="btn btn-primary"
                @click="fnCoupon({dom:$event.target,type:'COUPON_ADD',key:bIndex})"
              >添加优惠券模块</button>
            </div>
            <div
              class="decorate-form-row"
              style="margin-bottom:10px"
              v-for="(item,key) in item.list"
            >
              <div>
                <div class="decorate-edit-group decorate-edit-modult-group js_editItem">
                  <div class="edit-box">
                    <div title="删除" class="edit-control" @click="fnModuleItem1Del(bIndex,key);">
                      <i class="fa fa-close edit-trash"></i>
                    </div>
                  </div>
                  <div class="edit-content">
                    <div class="decorate-form-group">
                      <label class="dfg-label">图标：</label>
                      <div class="dfg-control-box">
                        <div title="点击更换图标" class="brand-crop-view mx-upload-group">
                          <input
                            type="file"
                            class="edit-file"
                            @change="fnUploadPreview({dom:$event.target,type:'COUPON_LOGO_EDIT',bIndex,key})"
                          >
                          <img
                            :src="item.url || item.url!=''?item.url:'https://pos.weifrom.com/static/common/images/common/upload_pic.jpg'"
                            alt="图片"
                            class="view-img"
                          >
                          <div
                            class="upload-del z-sm"
                            :style="item.url || item.url!=''?item.url:'display:none'"
                          >
                            <span>更换图片</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="decorate-form-group">
                      <label class="dfg-label">优惠名称：</label>
                      <div class="dfg-control-box">
                        <input type="text" maxlength="6" class="form-control" v-model="item.title">
                      </div>
                    </div>
                    <div class="decorate-form-group">
                      <label class="dfg-label">优惠类型：</label>
                      <div class="dfg-control-box">
                        <input type="text" maxlength="6" class="form-control" v-model="item.type">
                      </div>
                    </div>
                    <div class="decorate-form-group">
                      <label class="dfg-label">优惠描述：</label>
                      <div class="dfg-control-box">
                        <input
                          type="text"
                          maxlength="6"
                          class="form-control"
                          v-model="item.description"
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
import Swiper from "swiper";
import draggable from "vuedraggable";
export default {
  components: {
    draggable
  },
  data() {
    return {
      datas: [
        {
          imageUrl:
                "http://www.xiaoairenbase.cn/likongkong/head.png",
          type: "member",
        },
        {
          list: [
            {
              imageUrl:
                "https://pos.weifrom.com/static/common/images/micro/banner/b_01.jpg",
              openType: "webview"
            }
          ],
          type: "banner",
          imgHeight: 164
        },
        {
          list: [
            {
              imageUrl:
                "https://pos.weifrom.com/static/common/images/micro/default/5_01.jpg",
              name: "环境图"
            },
            {
              imageUrl:
                "https://pos.weifrom.com/static/common/images/micro/default/5_02.jpg",
              name: "门头图"
            },
            {
              imageUrl:
                "https://pos.weifrom.com/static/common/images/micro/default/5_03.jpg",
              name: "商品图"
            }
          ],
          type: "shopPic"
        },
        {
          type: "btnMenu",
          list: [
            {
              row: "1",
              title: "会员支付",
              // type: 0,
              subTitle: "快速扫码支付",
              imageUrl: require("../assets/home1.png"),
              url:
                "https://wx.liantuo.com/ShopCashier/shopMemberOpera…ode.in?memberId=1292541&merchantNo=EW_N2167194458",
              openType: "webview"
            },
            {
              row: "1",
              title: "会员充值",
              // type: 1,
              subTitle: "充值有优惠哦",
              imageUrl: require("../assets/home2.png"),
              url:
                "https://wx.liantuo.com/ShopCashier/shopCashierMicr…rge.in?merchantNo=EW_N2167194458&memberId=1292541",
              openType: "webview"
            },
            {
              row: "1",
              title: "消费记录",
              // type: 3,
              subTitle: "消费明细查看",
              imageUrl: require("../assets/home4.png"),
              url:
                "https://wx.liantuo.com/ShopCashier/shopMemberOperation/memberSaleOrderList.in?memberId=1292541",
              openType: "webview"
            },
            {
              row: "1",
              title: "充值记录",
              // type: 2,
              subTitle: "充值明细查看",
              imageUrl: require("../assets/home3.png"),
              url:
                "https://wx.liantuo.com/ShopCashier/shopMemberOperation/memberRechargeList.in?memberId=1292541",
              openType: "webview"
            },
            {
              row: "1",
              title: "积分记录",
              // type: 4,
              subTitle: "积分明细查看",
              imageUrl: require("../assets/home7.png"),
              url:
                "https://wx.liantuo.com/ShopCashier/shopMemberOperation/integralRecordList.in?memberId=1292541",
              openType: "webview"
            },
            {
              row: "2",
              title: "积分商城",
              // type: 5,
              subTitle: "优享好礼兑换",
              imageUrl: require("../assets/home6.png"),
              url:
                "https://wx.liantuo.com/ShopCashier/shopMemberOperation/pointMall.in?memberId=1292541",
              openType: "webview"
            },
            {
              row: "1",
              title: "推荐给朋友",
              // type: 7,
              subTitle: "",
              imageUrl: require("../assets/home5.png"),
              url:
                "https://wx.liantuo.com/ShopCashier/shopMemberOpera…&inviteMemberId=1292541&merchantNo=EW_N2167194458",
              openType: "webview"
            }
          ]
        },
        {
          type: "couponCard",
          style: "across",
          acrossItems: [
            {
              couponStyleType: 1,
              title: "优惠卡券",
              list: [
                {
                  couponStyleType: 1,
                  title: "寺兑换券",
                  type: "礼品兑换券",
                  description: "本优惠券不可兑换现金，不可找零。",
                  url:
                    "https://pos.weifrom.com/static/common/images/micro/default/2_01.jpg"
                }
              ]
            },
            {
              couponStyleType: 1,
              title: "优惠卡券33",
              list: [
                {
                  couponStyleType: 1,
                  title: "寺兑换券",
                  type: "礼品兑换券",
                  description: "本优惠券不可兑换现金，不可找零。",
                  url:
                    "https://pos.weifrom.com/static/common/images/micro/default/2_01.jpg"
                }
              ]
            }
          ],
          verticalItems: [
            {
              couponStyleType: 1,
              title: "优惠卡券1",
              list: [
                {
                  couponStyleType: 1,
                  title: "寺兑换券",
                  type: "礼品兑换券",
                  description: "本优惠券不可兑换现金，不可找零。",
                  url:
                    "https://pos.weifrom.com/static/common/images/micro/default/2_01.jpg"
                },
                {
                  couponStyleType: 1,
                  title: "希尔斯温泉门票测试",
                  type: "礼品兑换券",
                  description: "本优惠券不可兑换现金，不可找零。",
                  url:
                    "https://pos.weifrom.com/static/common/images/micro/default/2_01.jpg"
                },
                {
                  couponStyleType: 1,
                  title: "单人洗浴门票兑换券",
                  type: "礼品兑换券",
                  description: "详情参考美团",
                  url:
                    "https://pos.weifrom.com/static/common/images/micro/default/2_01.jpg"
                }
              ]
            }
          ]
        },
        {
          type: "shopIntro",
          list: [
            {
              shopName: "未来新零售",
              shopSite: "北京市法人台区1号院10号楼442",
              bData: "周一至周日",
              bHours: "9:30-18:30",
              mobile: "13055555555"
            }
          ]
        },
        {
          type: "brandIntro",
          brandName: "莲托夫",
          brandLogo: "",
          brandCover:
            "https://pos.weifrom.com/static/common/images/micro/default/2_01.jpg",
          brandInfo:
            "北京联拓天际电子商务有限公司于2007-06-04在丰台分局登记成立。法定代表人陈霄毅，公司经营范围包括公共软件服务；网页设计；计算机系统服务；电脑动画设计等。",
          brandEstablishedTime: "",
          brandAddress: "北京",
          brandBusiness: "网页设计"
        }
      ],
      currentType: "pageSetting",
      currentKey: null,
      backupsDatas: [],
      couponTabbarKey: 0,
      clData: '',
      setting: {
        title: "首页"
      },
    };
  },
  created() {
    // this.initSwiper();
    console.log(JSON.stringify(this.datas));
  },
  mounted() {
    this.initSwiper();
  },
  methods: {
    // 深克隆数组
    clone(obj, target) {
      var sunObj2 = target || {}; //继承传来的目标对象
      var toStr = Object.prototype.toString;
      for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
          if (typeof obj[prop] !== "object" && obj[prop] !== "null") {
            sunObj2[prop] = obj[prop];
          } else {
            sunObj2[prop] =
              toStr.call(obj[prop]) === "[object Object]" ? {} : [];
            this.clone(obj[prop], sunObj2[prop]);
          }
        }
      }
      return sunObj2;
    },
    //初始化轮播图
    initSwiper() {
      var mySwiper = new Swiper(".swiper-container", {
        direction: "horizontal" /*横向滑动*/,
        loop: false,
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true //修改swiper的父元素时，自动初始化swiper
      });
    },
    // 添加模块
    fnModuleSelect(item) {
      let data = this.backupsDatas.length > 0 ? this.backupsDatas : this.datas;
      for (let i = 0; i < data.length; i++) {
        if (data[i].type == item) {
          console.log(data);
          const obj = this.clone(data[i]);
          this.datas.push(obj);
          this.$nextTick(function() {
            this.initSwiper();
          });
          break;
        }
      }
    },
    // 停止拖动模块
    datadragEnd() {
      this.currentKey = null;
      this.currentType = "pageSetting";
      this.initSwiper();
    },
    //模块编辑
    fnModuleEdit(item, key) {
      this.currentKey = key;
      if (item == "pageSetting") {
        this.currentType = "pageSetting";
      } else {
        if (item.type == "member") {
          this.currentType = "member";
        } else if (item.type == "banner") {
          this.currentType = "banner";
        } else if (item.type == "btnMenu") {
          this.currentType = "btnMenu";
        } else if (item.type == "couponCard") {
          this.currentType = "couponCard";
        } else if (item.type == "shopPic") {
          this.currentType = "shopPic";
        } else if (item.type == "shopIntro") {
          this.currentType = "shopIntro";
        } else if (item.type == "brandIntro") {
          this.currentType = "brandIntro";
        }
      }
    },
    // 上传图片
    fnUploadPreview(e) {
      let that = this;
      let _this = e;
      var file = _this.dom.files[0];
      // 确认选择的文件是图片
      if (file.type.indexOf("image") == 0) {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = e => {
          // 图片base64化
          var newUrl = e.target.result;
          if (_this.type == "BANNER_ADD") {
            //添加轮播图
            let obj = {
              imageUrl: newUrl,
              openType: "webview"
            };
            this.datas[this.currentKey].list.push(obj);
          } else if (_this.type == "SHOP_PIC_ADD") {
            //添加门店图片
            let obj = {
              imageUrl: newUrl
            };
            this.datas[this.currentKey].list.push(obj);
          } else if (
            _this.type == "BANNER_EDIT" ||
            _this.type == "SHOP_PIC_EDIT" ||
            _this.type == "BTN_MENU_ICON_EDIT" ||
            _this.type == "BRAND_LOGO_EDIT" ||
            _this.type == "BRAND_COVER_EDIT" ||
            _this.type == "COUPON_LOGO_EDIT"
          ) {
            //编辑图片
            if (_this.type == "BRAND_LOGO_EDIT") {
              this.datas[this.currentKey].brandLogo = newUrl;
            } else if (_this.type == "BRAND_COVER_EDIT") {
              this.datas[this.currentKey].brandCover = newUrl;
            } else if (_this.type == "COUPON_LOGO_EDIT") {
              let data =
                this.datas[this.currentKey].style == "across"
                  ? this.datas[this.currentKey].acrossItems
                  : this.datas[this.currentKey].verticalItems;
              console.log(_this.bIndex, _this.key);
              data[_this.bIndex].list[_this.key].url = newUrl;
            } else {
              this.datas[this.currentKey].list[_this.index].imageUrl = newUrl;
            }
          }
        };
      }
    },
    // 添加门店模块
    fnShopIntro() {
      let obj = {
        shopName: "未来新零售",
        shopSite: "北京市法人台区1号院10号楼442",
        bData: "周一至周日",
        bHours: "9:30-18:30",
        mobile: "13055555555"
      };
      this.datas[this.currentKey].list.push(obj);
    },
    //添加功能列表子元素模块
    fnModuleAdd(item) {
      let obj = {
        row: 1,
        title: "标题",
        subTitle: "我是描述",
        imageUrl: require("../assets/home1.png"),
        openType: "webview"
      };
      this.datas[this.currentKey].list.push(obj);
    },
    //添加优惠券列表模块
    fnCouponList() {
      let obj = {
        couponStyleType: 1,
        title: "名称",
        list: [
          {
            couponStyleType: 1,
            title: "",
            type: "",
            description: "",
            url: ""
          }
        ]
      };
      this.datas[this.currentKey].acrossItems.push(obj);
    },
    //添加优惠券模块
    fnCoupon(e) {
      let item =
        this.datas[this.currentKey].style == "across"
          ? this.datas[this.currentKey].acrossItems
          : this.datas[this.currentKey].verticalItems;
      let obj = {};
      for (let i = 0; i < item[e.key].list.length; i++) {
        if (
          item[e.key].couponStyleType == item[e.key].list[i].couponStyleType
        ) {
          obj = this.clone(item[e.key].list[i]);
          item[e.key].list.push(obj);
          break;
        }
      }
    },
    // 优惠券tabbar切换
    btnCouponTabbar(key) {
      console.log(key)
      this.couponTabbarKey = key;
    },

    fnScrollEditPositon(i, k) {
      console.log(i, k);
    },
    // 删除 center内容 模块
    fnModuleDel() {
      this.backupsDatas.push(this.clone(this.datas[this.currentKey]));
      this.datas.splice(this.currentKey, 1);
      this.currentKey = null;
      this.currentType = "pageSetting";
      this.backupsDatas = this.deteleObject(this.backupsDatas);
    },
    // 删除 right内容 元素模块
    fnModuleItemDel(ind, item) {
      if (item == "couponCard") {
        let list =
          this.datas[this.currentKey].style == "across"
            ? this.datas[this.currentKey].acrossItems
            : this.datas[this.currentKey].verticalItems;
        list.splice(ind, 1);
      } else {
        this.datas[this.currentKey].list.splice(ind, 1);
      }
    },
    // 删除 right内容 优惠券列表子元素模块
    fnModuleItem1Del(ind, key) {
      let list =
        this.datas[this.currentKey].style == "across"
          ? this.datas[this.currentKey].acrossItems
          : this.datas[this.currentKey].verticalItems;
        if(list[ind].list.length == 1){
            alert('至少要保留1个哦！')
          return false
        } 
      list[ind].list.splice(key, 1);
    },
    // 删除 right内容 子元素模块icon
    fnUploadFileDel(e) {
      this.datas[this.currentKey].list[e.index].imageUrl = "";
    },
    //保存
    fnSubmit() {
      console.log(this.datas);
    },

    deteleObject(obj) {
      var uniques = [];
      var stringify = {};
      for (var i = 0; i < obj.length; i++) {
        var keys = Object.keys(obj[i]);
        keys.sort(function(a, b) {
          return Number(a) - Number(b);
        });
        var str = "";
        for (var j = 0; j < keys.length; j++) {
          str += JSON.stringify(keys[j]);
          str += JSON.stringify(obj[i][keys[j]]);
        }
        if (!stringify.hasOwnProperty(str)) {
          uniques.push(obj[i]);
          stringify[str] = true;
        }
      }
      return uniques;
    }
  }
};
</script>

<style>
@import "https://pos.weifrom.com/vendors/bootstrap/dist/css/bootstrap.min.css";
@import "../../static/css/index.css";
@import "../../static/css/font.css";
@import "../../static/css/swiper.min.css";
</style>
<style>
</style>
