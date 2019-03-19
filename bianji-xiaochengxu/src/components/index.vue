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
     <div class="pull-right" style=" position: fixed;top: 0;right: 0;"><button type="button" class="btn btn-primary btn-sm" @click="fnSubmit('SAVE');">保存</button></div>

    <div class="decorate-content">
      <div class="decorate-aside-group">
        <div class="decorate-aside-header">
          <h3 class="aside-title">小程序</h3>
          <div class="aside-tab">
            <a href="javascript:void(0);" class="aside-tab-name aside-active">组件</a>
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
        <!-- <div class="decorate-module-select-group">
          <div class="mx-sub-header">
            <h2 class="mx-sub-title">品牌介绍</h2>
          </div>
          <div class="module-box">
            <img src="https://pos.weifrom.com/static/common/images/micro/preview/p_02.jpg" alt>
          </div>
          <div class="module-select-box">
            <button type="button" class="btn btn-primary module-btn">选择使用</button>
          </div>
        </div>
        <div class="decorate-module-select-group">
          <div class="mx-sub-header">
            <h2 class="mx-sub-title">功能服务</h2>
          </div>
          <div class="module-box">
            <img src="https://pos.weifrom.com/static/common/images/micro/preview/p_03.jpg" alt>
          </div>
          <div class="module-select-box">
            <button type="button" class="btn btn-primary module-btn">选择使用</button>
          </div>
        </div>
        <div class="decorate-module-select-group">
          <div class="mx-sub-header">
            <h2 class="mx-sub-title">门店信息</h2>
          </div>
          <div class="module-box">
            <img src="https://pos.weifrom.com/static/common/images/micro/preview/p_04.jpg" alt>
          </div>
          <div class="module-select-box">
            <button type="button" class="btn btn-primary module-btn">选择使用</button>
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
              @click="fnModuleSelect('1')"
            >选择使用</button>
          </div>
        </div>
        <div class="decorate-module-select-group">
          <div class="mx-sub-header">
            <h2 class="mx-sub-title">自定义图片</h2>
          </div>
          <div class="module-box">
            <img src="https://pos.weifrom.com/static/common/images/micro/preview/p_06.jpg" alt>
          </div>
          <div class="module-select-box">
            <button type="button" class="btn btn-primary module-btn">选择使用</button>
          </div>
        </div> -->
        <div class="decorate-module-select-group">
          <div class="mx-sub-header">
            <h2 class="mx-sub-title">付费卡券</h2>
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
      <div class="decorate-center-group">
        <div class="center-topbar"></div>
        <div class="center-title" @click="fnModuleEdit('pageSetting')">{{setting.title}}</div>
        <div class="decorate-center-main">
          <draggable v-model="datas" @update="datadragEnd">
            <div v-for="(item,key) in datas">
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
              <!-- <div v-else-if="item.type == 1" @click="fnModuleEdit(item,key)">
                <div
                  class="decorate-module-preview-group decorate-micro-group decorate-shop-pic-preview-group"
                  :class="{'active':currentKey==key}"
                >
                  <div title="按住鼠标，可拖动排序模块" class="preview-drag">
                    <i class="fa fa-arrows"></i>
                  </div>
                  <h3 class="micro-group-title">门店图片</h3>
                  <ul class="dsp-list clearfix">
                    <li v-for="(imageUrl) in item.imageUrl" class="dsp-li">
                      <img :src="imageUrl" alt="门店图片" class="dsp-pic">
                    </li>
                  </ul>
                </div>
              </div> -->

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
                          <img v-if="items.iconUrl" :src="items.iconUrl" class="hml-image">
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

              <div v-else-if="item.type == 'couponCard'" @click="fnModuleEdit(item,key)">
                <div
                  class="decorate-module-preview-group decorate-micro-group decorate-shop-pic-preview-group"
                  :class="{'active':currentKey==key}"
                >
                  <div title="按住鼠标，可拖动排序模块" class="preview-drag">
                    <i class="fa fa-arrows"></i>
                  </div>
                  <h3 class="micro-group-title">优惠券</h3>
                  <div class="coupons">
                    <div class="coupons-card" v-for="(item,key) in item.items">
                      <div class="coupons-img coupons-red">
                        <div class="coupons-lines"></div>
                      </div>
                      <div class="coupons-info">
                        <div class="coupons-title">{{item.title}}</div>
                        <div>
                          <div class="coupons-type">
                            <!-- <text>{{couponType[item.type]}}</text> -->
                            礼品兑换券
                          </div>
                          <div class="coupons-subtitle">
                            <!-- <block wx:if="{{item.type == 9}}">
                                                    <div>满
                                                    <text class='price '>{{item.leastCost}}元</text>
                                                    </div>
                                                    <div>减
                                                    <text class='coupons-prices '>{{item.reduceCost}}元</text>
                                                    </div>
                            </block>-->
                            {{item.description}}
                          </div>
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
              <div class="edit-control" title="拖动">
                <i class="fa fa-arrows edit-arrows"></i>
              </div>
            </div>
            <div class="edit-content">
              <div class="decorate-form-group l-w60">
                <label class="dfg-label">轮播图：</label>
                <div class="dfg-control-box">
                  <div title="点击更换图片" class="brand-crop-view" style="height: 100px;">
                    <input type="file" class="edit-file">
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
                      @change="fnUploadPreview({dom:$event.target,type:'BTN_MENU_ICON',index:bIndex})"
                    >
                    <img
                      :src="bItem.iconUrl&&bItem.iconUrl!=''?bItem.iconUrl:'https://pos.weifrom.com/static/common/images/common/upload_pic.jpg'"
                      alt="图片"
                      class="view-img"
                    >
                    <div
                      class="view-del-box view-del"
                      @click.stop="fnUploadFileDel({type:'BTN_MENU_ICON',index:bIndex});"
                      v-if="bItem.iconUrl&&bItem.iconUrl!=''"
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

      <!-- 编辑卡券模块 -->
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
          imageUrl: [
            "https://pos.weifrom.com/static/common/images/micro/default/5_01.jpg",
            "https://pos.weifrom.com/static/common/images/micro/default/5_02.jpg",
            "https://pos.weifrom.com/static/common/images/micro/default/5_03.jpg"
          ],
          type: "1"
        },
        {
          type: "btnMenu",
          list: [
            {
              row: "1",
              title: "会员支付",
              // type: 0,
              subTitle: "快速扫码支付",
              iconUrl: require("../assets/home1.png"),
              url:
                "https://wx.liantuo.com/ShopCashier/shopMemberOpera…ode.in?memberId=1292541&merchantNo=EW_N2167194458",
              openType: "webview"
            },
            {
              row: "1",
              title: "会员充值",
              // type: 1,
              subTitle: "充值有优惠哦",
              iconUrl: require("../assets/home2.png"),
              url:
                "https://wx.liantuo.com/ShopCashier/shopCashierMicr…rge.in?merchantNo=EW_N2167194458&memberId=1292541",
              openType: "webview"
            },
            {
              row: "1",
              title: "消费记录",
              // type: 3,
              subTitle: "消费明细查看",
              iconUrl: require("../assets/home4.png"),
              url:
                "https://wx.liantuo.com/ShopCashier/shopMemberOperation/memberSaleOrderList.in?memberId=1292541",
              openType: "webview"
            },
            {
              row: "1",
              title: "充值记录",
              // type: 2,
              subTitle: "充值明细查看",
              iconUrl: require("../assets/home3.png"),
              url:
                "https://wx.liantuo.com/ShopCashier/shopMemberOperation/memberRechargeList.in?memberId=1292541",
              openType: "webview"
            },
            {
              row: "1",
              title: "积分记录",
              // type: 4,
              subTitle: "积分明细查看",
              iconUrl: require("../assets/home7.png"),
              url:
                "https://wx.liantuo.com/ShopCashier/shopMemberOperation/integralRecordList.in?memberId=1292541",
              openType: "webview"
            },
            {
              row: "2",
              title: "积分商城",
              // type: 5,
              subTitle: "优享好礼兑换",
              iconUrl: require("../assets/home6.png"),
              url:
                "https://wx.liantuo.com/ShopCashier/shopMemberOperation/pointMall.in?memberId=1292541",
              openType: "webview"
            },
            {
              row: "1",
              title: "推荐给朋友",
              // type: 7,
              subTitle: "",
              iconUrl: require("../assets/home5.png"),
              url:
                "https://wx.liantuo.com/ShopCashier/shopMemberOpera…&inviteMemberId=1292541&merchantNo=EW_N2167194458",
              openType: "webview"
            }
          ]
        },
        {
          type: "couponCard",
          items: [
            {
              title: "寺兑换券",
              description: "本优惠券不可兑换现金，不可找零。"
            },
            {
              title: "希尔斯温泉门票测试",
              description: "本优惠券不可兑换现金，不可找零。"
            },
            { title: "单人洗浴门票兑换券", description: "详情参考美团" }
          ]
        }
      ],
      currentType: "pageSetting",
      currentKey: null,
      setting: {
        title: "首页"
      }
    };
  },
  methods: {
    initSwiper() {
      var mySwiper = new Swiper(".swiper-container", {
        direction: "horizontal" /*横向滑动*/,
        loop: false,
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true //修改swiper的父元素时，自动初始化swiper
      });
    },
    fnModuleSelect(item) {
      for (let i = 0; i < this.datas.length; i++) {
        if (this.datas[i].type == item) {
          this.datas.push(this.datas[i]);
          break;
        }
      }
    },
    datadragEnd() {
      this.currentKey = null;
      this.currentType = "pageSetting";
      this.initSwiper();
    },
    fnModuleEdit(item, key) {
      this.currentKey = key;
      if (item == "pageSetting") {
        this.currentType = "pageSetting";
      } else {
        if (item.type == "banner") {
          this.currentType = "banner";
        } else if (item.type == "btnMenu") {
          this.currentType = "btnMenu";
        } else if (item.type == "couponCard") {
          this.currentType = "couponCard";
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
            for (let i = 0; i < this.datas.length; i++) {
              if (this.datas[i].type == this.currentType) {
                let obj = {
                  imageUrl: newUrl,
                  openType: "webview"
                };
                this.datas[i].list.push(obj);
              }
            }
          }else if(_this.type == "BTN_MENU_ICON"){
            for (let i = 0; i < this.datas.length; i++) {
              if (this.datas[i].type == this.currentType) {
                this.datas[i].list[_this.index].iconUrl = newUrl;
              }
            }
          }
        };
      }
    },
    //功能列表子元素模块添加
    fnModuleAdd(item) {
      for (let i = 0; i < this.datas.length; i++) {
        if (this.datas[i].type == this.currentType) {
          let obj = {
            row: 1,
            title: "标题",
            subTitle: "我是描述",
            iconUrl: require("../assets/home1.png"),
            openType: "webview"
          };
          this.datas[i].list.push(obj);
        }
      }
    },
    fnScrollEditPositon(i, k) {
      console.log(i, k);
    },
    // 删除模块
    fnModuleDel() {
      for (let i = 0; i < this.datas.length; i++) {
        if (this.datas[i].type == this.currentType) {
          this.datas.splice(i, 1);
          this.currentType = "pageSetting";
        }
      }
    },
    // 删除子元素模块
    fnModuleItemDel(ind) {
      for (let i = 0; i < this.datas.length; i++) {
        if (this.datas[i].type == this.currentType) {
          this.datas[i].list.splice(ind, 1);
        }
      }
    },
    // 删除子元素模块icon
    fnUploadFileDel(e) {
      for (let i = 0; i < this.datas.length; i++) {
        if (this.datas[i].type == this.currentType) {
          this.datas[i].list[e.index].iconUrl = "";
        }
      }
    },
    //保存
    fnSubmit(){
      console.log(this.datas)
    }
  },
  mounted() {
    this.initSwiper();
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
