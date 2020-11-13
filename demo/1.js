import React from 'react';
import { defaultValue, CheckType } from './decorators';
import { mb_open } from 'cbkfe-bridge';
import BaseModel from './BaseModel';
import Address from '@base/location';

export default class ContextModel extends BaseModel {

    // 有效期标题
    @defaultValue([])
    @CheckType('array')
    validityTitle = []

    // 限制图文详情高度 limitContext * 屏幕高度
    @defaultValue(3)
    @CheckType('number')
    limitContext = 1;

    // 预约说明
    @defaultValue([])
    @CheckType('array')
    appointComment = []

    // 购买说明
    @defaultValue([])
    @CheckType('string')
    buyExplain = ''

    // 适用人数
    @defaultValue([])
    @CheckType('array')
    usePersonTitle = []

    // 适用时间
    @defaultValue([])
    @CheckType('array')
    optionTitles = []

    // 使用规则
    @defaultValue([])
    @CheckType('array')
    useRules = []

    // 温馨提示
    @defaultValue([])
    @CheckType('array')
    tips = []

    // 图文详情
    @defaultValue('')
    @CheckType('string')
    description = ''

    // <p> “</p>
    // <p>2. 平台所展示的产品及服务的直接提供方为实际提供产品或服务的商户，彩贝壳并不直接提供产品或服务。</p>
    // <p>3. “彩贝壳”作为第三方技术平台，仅在技术服务范围内承担责任，彩贝壳不对产品及服务提供方与平台用户发生的交易承担责任。</p>
    // <p>4. 体验师针对本服务发布的玩法为个人体验，彩贝壳仅做技术关联处理，不代表彩贝壳对本服务的意见。</p>
    // <p>5. 其他应知条款及事项，请详细阅读<a className="green" href="http://pre.caibeike.net/mweb/protocol.html">《彩贝壳用户协议》</a>、<a className="green" href="http://pre.caibeike.net/ms/user/agreement/privacy">《隐私政策》</a>等用户协议。</p>
    // 免责说明
    @defaultValue([
        '“彩贝壳”网络平台作为第三方网络技术提供者，仅为产品或服务直接提供方及平台用户双方之间提供技术网络平台服务。',
        '平台所展示的产品及服务的直接提供方为实际提供产品或服务的商户，彩贝壳并不直接提供产品或服务。',
        '“彩贝壳”作为第三方技术平台，仅在技术服务范围内承担责任，彩贝壳不对产品及服务提供方与平台用户发生的交易承担责任。',
        '体验师针对本服务发布的玩法为个人体验，彩贝壳仅做技术关联处理，不代表彩贝壳对本服务的意见。',
        <span>其他应知条款及事项，请详细阅读<span style={{ color: ' #ff9933', fontSize: '0.7rem' }} onClick={() => mb_open(Address.url('/ms/user/agreement/index'))} >《彩贝壳用户协议》</span>、<span style={{ color: ' #ff9933', fontSize: '0.7rem' }} onClick={() => mb_open(Address.url('/ms/user/agreement/privacy'))}>《隐私政策》</span>等用户协议。</span>
    ])
    @CheckType('array')
    disclaimerThat = ['“彩贝壳”网络平台作为第三方网络技术支持着，仅为产品或服“彩贝壳”网络平台作为第三方网络技术支持着，仅为产品或服', '1212121', '1212121']

    @defaultValue()
    @CheckType('array')
    notesDisclaimer = [
        '“彩贝壳”网络平台作为第三方网络技术提供者，仅为产品或服务直接提供方及平台用户双方之间提供技术网络平台服务。',
        '平台所展示的产品及服务的直接提供方为实际提供产品或服务的商户，彩贝壳并不直接提供产品或服务。',
        '“彩贝壳”作为第三方技术平台，仅在技术服务范围内承担责任，彩贝壳不对产品及服务提供方与平台用户发生的交易承担责任。',
        '体验师针对本服务发布的玩法为个人体验，彩贝壳仅做技术关联处理，不代表彩贝壳对本服务的意见。',
        <span>其他应知条款及事项，请详细阅读<span style={{ color: ' #ff9933', fontSize: '0.7rem' }} onClick={() => mb_open(Address.url('/ms/user/agreement/index'))} >《彩贝壳用户协议》</span>、<span style={{ color: ' #ff9933', fontSize: '0.7rem' }} onClick={() => mb_open(Address.url('/ms/user/agreement/privacy'))}>《隐私政策》</span>等用户协议。</span>
    ]
}