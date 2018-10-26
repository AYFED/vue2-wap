import Vue from 'vue';
import Router from 'vue-router';

// 路由懒加载
const Home = () => import('./pages/Home');
const Demo = () => import('./pages/Demo')
const Actionsheet = () => import('./pages/Actionsheet')
const Alert = () => import('./pages/Alert')
const Badge = () => import('./pages/Badge')
const Blur = () => import('./pages/Blur')
const ButtonTab = () => import('./pages/ButtonTab')
const Calendar = () => import('./pages/Calendar')
const Card = () => import('./pages/Card')
const CellBox = () => import('./pages/CellBox')
const CellFormPreview = () => import('./pages/CellFormPreview')
const Cell = () => import('./pages/Cell')
const CheckIcon = () => import('./pages/CheckIcon')
const Checker = () => import('./pages/Checker')
const Checklist = () => import('./pages/Checklist')
const Clocker = () => import('./pages/Clocker')
const ColorPicker = () => import('./pages/ColorPicker')
const Confirm = () => import('./pages/Confirm')
const Countdown = () => import('./pages/Countdown')
const Countup = () => import('./pages/Countup')
const DatetimeRange = () => import('./pages/DatetimeRange')
const DatetimeView = () => import('./pages/DatetimeView')
const Datetime = () => import('./pages/Datetime')
const Divider = () => import('./pages/Divider')
const Drawer = () => import('./pages/Drawer')
const Flexbox = () => import('./pages/Flexbox')
const Flow = () => import('./pages//Flow')
const FormPreview = () => import('./pages/FormPreview')
const Grid = () => import('./pages/Grid')
const Group = () => import('./pages/Group')
const Icon = () => import('./pages/Icon')
const InlineCalendar = () => import('./pages/InlineCalendar')
const InlineLoading = () => import('./pages/InlineLoading')
const InlineXNumber = () => import('./pages/InlineXNumber')
const LoadMore = () => import('./pages/LoadMore')
const InlineXSwitch = () => import('./pages/InlineXSwitch')
const Loading = () => import('./pages/Loading')
const Marquee = () => import('./pages/Marquee')
const Masker = () => import('./pages/Masker')
const Msg = () => import('./pages/Msg')
const Panel = () => import('./pages/Panel')
const Picker = () => import('./pages/Picker')
const Popover = () => import('./pages/Popover')
const Previewer = () => import('./pages/Previewer')
const Qrcode = () => import('./pages/Qrcode')
const PopupHeader = () => import('./pages/PopupHeader')
const PopupPicker = () => import('./pages/PopupPicker')
const PopupRadio = () => import('./pages/PopupRadio')
const Popup = () => import('./pages/Popup')
const Radio = () => import('./pages/Radio')
const Range = () => import('./pages/Range')
const Rater = () => import('./pages/Rater')
const Scroller = () => import('./pages/Scroller')
const Search = () => import('./pages/Search')
const SearchStatic = () => import('./pages/SearchStatic')
const Selector = () => import('./pages/Selector')
const Spinner = () => import('./pages/Spinner')
const Step = () => import('./pages/Step')
const Sticky = () => import('./pages/Sticky')
const Swiper = () => import('./pages/Swiper')
const Swipeout = () => import('./pages/Swipeout')
const Tab = () => import('./pages/Tab')
const Tabbar = () => import('./pages/Tabbar')
const TabbarSimple = () => import('./pages/TabbarSimple')
const TabbarIcon = () => import('./pages/TabbarIcon')
const Timeline = () => import('./pages/Timeline')
const Toast = () => import('./pages/Toast')
const ViewBox = () => import('./pages/ViewBox')
const WechatEmotion = () => import('./pages/WechatEmotion')
const XAddress = () => import('./pages/XAddress')
const XButton = () => import('./pages/XButton')
const XCircle = () => import('./pages/XCircle')
const XDialog = () => import('./pages/XDialog')
const XHeader = () => import('./pages/XHeader')
const XIcon = () => import('./pages/XIcon')
const XImg = () => import('./pages/XImg')
const XInput = () => import('./pages/XInput')
const XNumber = () => import('./pages/XNumber')
const XProgress = () => import('./pages/XProgress')
const XSwitch = () => import('./pages/XSwitch')
const XTable = () => import('./pages/XTable')
const XTextarea = () => import('./pages/XTextarea')
const VChartHome = () => import('./pages/v-chart/Home')
const LineBasic = () => import('./pages/v-chart/line_basic')
const LineSmoothWithDot = () => import('./pages/v-chart/line_smooth_with_dot')
const LineRealtime = () => import('./pages/v-chart/line_realtime')
const LineGradient = () => import('./pages/v-chart/line_gradient')
const LineColor = () => import('./pages/v-chart/line_color')
const LineWithDot = () => import('./pages/v-chart/line_with_dot')
const AreaStack = () => import('./pages/v-chart/area_stack')
const BarStack = () => import('./pages/v-chart/bar_stack')
const BarSeries = () => import('./pages/v-chart/bar_series')
const BarPercent = () => import('./pages/v-chart/bar_percent')
const BarBasic = () => import('./pages/v-chart/bar_basic')
const AreaNegative = () => import('./pages/v-chart/area_negative')
const PieAnnular = () => import('./pages/v-chart/pie_annular')
const AreaGradient = () => import('./pages/v-chart/area_gradient')
const PieBasic = () => import('./pages/v-chart/pie_basic')
const AreaEmpty = () => import('./pages/v-chart/area_empty')
const Point = () => import('./pages/v-chart/point')
const AreaCompare = () => import('./pages/v-chart/area_compare')
const AreaBasic = () => import('./pages/v-chart/area_basic')
const PreventRender = () => import('./pages/v-chart/prevent_render')
const Pullup = () => import('./pages/Pullup')
const Pulldown = () => import('./pages/Pulldown')
const PulldownPullup = () => import('./pages/PulldownPullup')
const Agree = () => import('./pages/Agree')
const AppTest = () => import('./pages/AppTest')
const Center = () => import('./pages/Center')
const Close = () => import('./pages/Close')
const Comment = () => import('./pages/Comment')
const Device = () => import('./pages/Device')
const Donate = () => import('./pages/Donate')
const FormatTime = () => import('./pages/FormatTime')

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },{
      path: '/demo',
      name: 'demo',
      component: Demo
    }, {
      path: '/component/actionsheet',
      name: 'actionsheet',
      component: Actionsheet
    }, {
      path: '/component/alert',
      name: 'alert',
      component: Alert
    }, {
      path: '/component/badge',
      name: 'badge',
      component: Badge
    }, {
      path: '/component/blur',
      name: 'blur',
      component: Blur
    }, {
      path: '/component/button-tab',
      name: 'button-tab',
      component: ButtonTab
    }, {
      path: '/component/calendar',
      name: 'calendar',
      component: Calendar
    }, {
      path: '/component/card',
      name: 'card',
      component: Card
    }, {
      path: '/component/cell-box',
      name: 'cell-box',
      component: CellBox
    }, {
      path: '/component/cell-form-preview',
      name: 'cell-form-preview',
      component: CellFormPreview
    }, {
      path: '/component/cell',
      name: 'cell',
      component: Cell
    }, {
      path: '/component/check-icon',
      name: 'check-icon',
      component: CheckIcon
    }, {
      path: '/component/checker',
      name: 'checker',
      component: Checker
    }, {
      path: '/component/checklist',
      name: 'checklist',
      component: Checklist
    }, {
      path: '/component/clocker',
      name: 'clocker',
      component: Clocker
    }, {
      path: '/component/color-picker',
      name: 'color-picker',
      component: ColorPicker
    }, {
      path: '/component/confirm',
      name: 'confirm',
      component: Confirm
    }, {
      path: '/component/countdown',
      name: 'countdown',
      component: Countdown
    }, {
      path: '/component/countup',
      name: 'countup',
      component: Countup
    }, {
      path: '/component/datetime-range',
      name: 'datetime-range',
      component: DatetimeRange
    }, {
      path: '/component/datetime-view',
      name: 'datetime-view',
      component: DatetimeView
    }, {
      path: '/component/datetime',
      name: 'datetime',
      component: Datetime
    }, {
      path: '/component/divider',
      name: 'divider',
      component: Divider
    }, {
      path: '/component/drawer',
      name: 'drawer',
      component: Drawer
    }, {
      path: '/component/flexbox',
      name: 'flexbox',
      component: Flexbox
    }, {
      path: '/component/flow',
      name: 'flow',
      component: Flow
    }, {
      path: '/component/form-preview',
      name: 'form-preview',
      component: FormPreview
    }, {
      path: '/component/grid',
      name: 'grid',
      component: Grid
    }, {
      path: '/component/group',
      name: 'group',
      component: Group
    }, {
      path: '/component/icon',
      name: 'icon',
      component: Icon
    }, {
      path: '/component/inline-calendar',
      name: 'inline-calendar',
      component: InlineCalendar
    }, {
      path: '/component/inline-loading',
      name: 'inline-loading',
      component: InlineLoading
    }, {
      path: '/component/inline-x-number',
      name: 'inline-x-numberg',
      component: InlineXNumber
    }, {
      path: '/component/load-more',
      name: 'load-more',
      component: LoadMore
    },{
      path: '/component/inline-x-switch',
      name: 'inline-x-switch',
      component: InlineXSwitch
    }, {
      path: '/component/loading',
      name: 'loading',
      component: Loading
    }, {
      path: '/component/marquee',
      name: 'marquee',
      component: Marquee
    }, {
      path: '/component/masker',
      name: 'masker',
      component: Masker
    }, {
      path: '/component/msg',
      name: 'msg',
      component: Msg
    }, {
      path: '/component/panel',
      name: 'panel',
      component: Panel
    }, {
      path: '/component/picker',
      name: 'picker',
      component: Picker
    }, {
      path: '/component/popover',
      name: 'popover',
      component: Popover
    }, {
      path: '/component/previewer',
      name: 'previewer',
      component: Previewer
    }, {
      path: '/component/qrcode',
      name: 'qrcode',
      component: Qrcode
    }, {
      path: '/component/popup-header',
      name: 'popup-header',
      component: PopupHeader
    }, {
      path: '/component/popup-picker',
      name: 'popup-picker',
      component: PopupPicker
    }, {
      path: '/component/popup-radio',
      name: 'popup-radio',
      component: PopupRadio
    }, {
      path: '/component/popup',
      name: 'popup',
      component: Popup
    }, {
      path: '/component/radio',
      name: 'radio',
      component: Radio
    }, {
      path: '/component/range',
      name: 'range',
      component: Range
    }, {
      path: '/component/rater',
      name: 'rater',
      component: Rater
    }, {
      path: '/component/scroller',
      name: 'scroller',
      component: Scroller
    }, {
      path: '/component/search',
      name: 'search',
      component: Search
    }, {
      path: '/component/search-static',
      name: 'search-static',
      component: SearchStatic
    }, {
      path: '/component/selector',
      name: 'selector',
      component: Selector
    }, {
      path: '/component/spinner',
      name: 'spinner',
      component: Spinner
    }, {
      path: '/component/step',
      name: 'step',
      component: Step
    }, {
      path: '/component/sticky',
      name: 'sticky',
      component: Sticky
    }, {
      path: '/component/swiper',
      name: 'swiper',
      component: Swiper
    }, {
      path: '/component/swipeout',
      name: 'swipeout',
      component: Swipeout
    }, {
      path: '/component/tab',
      name: 'tab',
      component: Tab
    }, {
      path: '/component/tabbar',
      name: 'tabbar',
      component: Tabbar
    }, {
      path: '/component/tabbar-simple',
      name: 'tabbar-simple',
      component: TabbarSimple
    }, {
      path: '/component/tabbar-icon',
      name: 'tabbar-icon',
      component: TabbarIcon
    }, {
      path: '/component/timeline',
      name: 'timeline',
      component: Timeline
    }, {
      path: '/component/toast',
      name: 'toast',
      component: Toast
    }, {
      path: '/component/view-box',
      name: 'view-box',
      component: ViewBox
    }, {
      path: '/component/wechat-emotion',
      name: 'wechat-emotion',
      component: WechatEmotion
    }, {
      path: '/component/x-address',
      name: 'x-address',
      component: XAddress
    }, {
      path: '/component/x-button',
      name: 'x-button',
      component: XButton
    }, {
      path: '/component/x-circle',
      name: 'x-circle',
      component: XCircle
    }, {
      path: '/component/x-dialog',
      name: 'x-dialog',
      component: XDialog
    }, {
      path: '/component/x-header',
      name: 'x-header',
      component: XHeader
    }, {
      path: '/component/x-icon',
      name: 'x-icon',
      component: XIcon
    }, {
      path: '/component/x-img',
      name: 'x-img',
      component: XImg
    }, {
      path: '/component/x-input',
      name: 'x-input',
      component: XInput
    }, {
      path: '/component/x-number',
      name: 'x-number',
      component: XNumber
    }, {
      path: '/component/x-progress',
      name: 'x-progress',
      component: XProgress
    }, {
      path: '/component/x-switch',
      name: 'x-switch',
      component: XSwitch
    }, {
      path: '/component/x-table',
      name: 'x-table',
      component: XTable
    }, {
      path: '/component/x-textarea',
      name: 'x-textarea',
      component: XTextarea
    }, {
      path: '/component/v-chart',
      name: 'v-chart-home',
      component: VChartHome
    }, {
      path: '/component/v-chart/line_basic',
      name: 'line_basic',
      component: LineBasic
    }, {
      path: '/component/v-chart/line_smooth_with_dot',
      name: 'line_smooth_with_dot',
      component: LineSmoothWithDot
    }, {
      path: '/component/v-chart/line_realtime',
      name: 'line_realtime',
      component: LineRealtime
    }, {
      path: '/component/v-chart/line_gradient',
      name: 'line_gradient',
      component: LineGradient
    }, {
      path: '/component/v-chart/line_color',
      name: 'line_color',
      component: LineColor
    },{
      path: '/component/v-chart/line_with_dot',
      name: 'line_with_dot',
      component: LineWithDot
    },{
      path: '/component/v-chart/area_stack',
      name: 'area_stack',
      component: AreaStack
    },{
      path: '/component/v-chart/bar_stack',
      name: 'bar_stack',
      component: BarStack
    },{
      path: '/component/v-chart/bar_series',
      name: 'bar_series',
      component: BarSeries
    },{
      path: '/component/v-chart/bar_percent',
      name: 'bar_percent',
      component: BarPercent
    },{
      path: '/component/v-chart/bar_basic',
      name: 'bar_basic',
      component: BarBasic
    },{
      path: '/component/v-chart/area_negative',
      name: 'area_negative',
      component: AreaNegative
    },{
      path: '/component/v-chart/pie_annular',
      name: 'pie_annular',
      component: PieAnnular
    },{
      path: '/component/v-chart/area_gradient',
      name: 'area_gradient',
      component: AreaGradient
    },{
      path: '/component/v-chart/pie_basic',
      name: 'pie_basic',
      component: PieBasic
    },{
      path: '/component/v-chart/area_empty',
      name: 'area_empty',
      component: AreaEmpty
    },{
      path: '/component/v-chart/point',
      name: 'point',
      component: Point
    },{
      path: '/component/v-chart/area_compare',
      name: 'area_compare',
      component: AreaCompare
    },{
      path: '/component/v-chart/area_basic',
      name: 'area_basic',
      component: AreaBasic
    },{
      path: '/component/v-chart/prevent_render',
      name: 'prevent_render',
      component: PreventRender
    },{
      path: '/component/pullup',
      name: 'pullup',
      component: Pullup
    },{
      path: '/component/pulldown',
      name: 'pulldown',
      component: Pulldown
    },{
      path: '/component/pulldown-pullup',
      name: 'pulldown-pullup',
      component: PulldownPullup
    },{
      path: '/component/agree',
      name: 'agree',
      component: Agree
    },{
      path: '/component/app-test',
      name: 'app-test',
      component: AppTest
    },{
      path: '/component/center',
      name: 'center',
      component: Center
    },{
      path: '/component/close',
      name: 'close',
      component: Close
    },{
      path: '/component/comment',
      name: 'comment',
      component: Comment
    },{
      path: '/component/device',
      name: 'device',
      component: Device
    },{
      path: '/component/donate',
      name: 'donate',
      component: Donate
    },{
      path: '/component/formatime',
      name: 'formatime',
      component: FormatTime
    },{
      path: '/component/inline-calendar-multi',
      name: 'inline-calendar-multi',
      component: () => import('./pages/InlineCalendarMulti')
    },{
      path: '/component/index-list',
      name: 'index-list',
      component: () => import('./pages/IndexList')
    }
  ]
})
