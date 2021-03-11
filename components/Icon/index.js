import React from 'react'
import styled, { css } from 'styled-components'

import Add from '../../assets/images/icons/add.svg'
import Attach from '../../assets/images/icons/attach.svg'
import Activity from '../../assets/images/icons/activity.svg'
import AddUser from '../../assets/images/icons/add_user.svg'
import ArrowDown from '../../assets/images/icons/arrow_down.svg'
import ArrowDown2 from '../../assets/images/icons/arrow_down_2.svg'
import ArrowDown3 from '../../assets/images/icons/arrow_down_3.svg'
import ArrowDownCircle from '../../assets/images/icons/arrow_down_circle.svg'
import ArrowDownSquare from '../../assets/images/icons/arrow_down_square.svg'
import ArrowDownCarret from '../../assets/images/icons/arrow_down_carret.svg'
import ArrowLeft from '../../assets/images/icons/arrow_left.svg'
import ArrowLeft2 from '../../assets/images/icons/arrow_left_2.svg'
import ArrowLeft3 from '../../assets/images/icons/arrow_left_3.svg'
import ArrowLeftCircle from '../../assets/images/icons/arrow_left_circle.svg'
import ArrowLeftSquare from '../../assets/images/icons/arrow_left_square.svg'
import ArrowRight from '../../assets/images/icons/arrow_right.svg'
import ArrowRight2 from '../../assets/images/icons/arrow_right_2.svg'
import ArrowRight3 from '../../assets/images/icons/arrow_right_3.svg'
import ArrowRightCircle from '../../assets/images/icons/arrow_right_circle.svg'
import ArrowRightSquare from '../../assets/images/icons/arrow_right_square.svg'
import ArrowUp from '../../assets/images/icons/arrow_up.svg'
import ArrowUp2 from '../../assets/images/icons/arrow_up_2.svg'
import ArrowUp3 from '../../assets/images/icons/arrow_up_3.svg'
import ArrowUpCircle from '../../assets/images/icons/arrow_up_circle.svg'
import ArrowUpSquare from '../../assets/images/icons/arrow_up_square.svg'
import ArrowUpCarret from '../../assets/images/icons/arrow_up_carret.svg'
import Bag from '../../assets/images/icons/bag.svg'
import Bag2 from '../../assets/images/icons/bag_2.svg'
import Bookmark from '../../assets/images/icons/bookmark.svg'
import Buy from '../../assets/images/icons/buy.svg'
import Calendar from '../../assets/images/icons/calendar.svg'
import Call from '../../assets/images/icons/call.svg'
import CallMissed from '../../assets/images/icons/call_missed.svg'
import CallSilent from '../../assets/images/icons/call_silent.svg'
import Calling from '../../assets/images/icons/calling.svg'
import Camera from '../../assets/images/icons/camera.svg'
import Category from '../../assets/images/icons/category.svg'
import Chart from '../../assets/images/icons/chart.svg'
import Check from '../../assets/images/icons/check.svg'
import Chat from '../../assets/images/icons/chat.svg'
import CloseSquare from '../../assets/images/icons/close_square.svg'
import Danger from '../../assets/images/icons/danger.svg'
import Delete from '../../assets/images/icons/delete.svg'
import Discount from '../../assets/images/icons/discount.svg'
import Discovery from '../../assets/images/icons/discovery.svg'
import Document from '../../assets/images/icons/document.svg'
import Download from '../../assets/images/icons/download.svg'
import Edit from '../../assets/images/icons/edit.svg'
import EditSquare from '../../assets/images/icons/edit_square.svg'
import Facebook from '../../assets/images/icons/facebook.svg'
import Filter from '../../assets/images/icons/filter.svg'
import Filter2 from '../../assets/images/icons/filter_2.svg'
import Folder from '../../assets/images/icons/folder.svg'
import Flag from '../../assets/images/icons/flag.svg'
import Game from '../../assets/images/icons/game.svg'
import Graph from '../../assets/images/icons/graph.svg'
import Google from '../../assets/images/icons/google.svg'
import Heart from '../../assets/images/icons/heart.svg'
import Hide from '../../assets/images/icons/hide.svg'
import Home from '../../assets/images/icons/home.svg'
import Image from '../../assets/images/icons/image.svg'
import Image_2 from '../../assets/images/icons/image_2.svg'
import InfoCircle from '../../assets/images/icons/info_circle.svg'
import InfoSquare from '../../assets/images/icons/info_square.svg'
import Link from '../../assets/images/icons/link.svg'
import Location from '../../assets/images/icons/location.svg'
import Lock from '../../assets/images/icons/lock.svg'
import Login from '../../assets/images/icons/login.svg'
import Logout from '../../assets/images/icons/logout.svg'
import Menu from '../../assets/images/icons/menu.svg'
import Message from '../../assets/images/icons/message.svg'
import MoreCircle from '../../assets/images/icons/more_circle.svg'
import MoreSquare from '../../assets/images/icons/more_square.svg'
import Notification from '../../assets/images/icons/notification.svg'
import Paper from '../../assets/images/icons/paper.svg'
import PaperDownload from '../../assets/images/icons/paper_download.svg'
import PaperFail from '../../assets/images/icons/paper_fail.svg'
import PaperNegative from '../../assets/images/icons/paper_negative.svg'
import PaperPlus from '../../assets/images/icons/paper_plus.svg'
import PaperUpload from '../../assets/images/icons/paper_upload.svg'
import Password from '../../assets/images/icons/password.svg'
import Play from '../../assets/images/icons/play.svg'
import Plus from '../../assets/images/icons/plus.svg'
import Profile from '../../assets/images/icons/profile.svg'
import Scan from '../../assets/images/icons/scan.svg'
import Search from '../../assets/images/icons/search.svg'
import Send from '../../assets/images/icons/send.svg'
import Setting from '../../assets/images/icons/setting.svg'
import ShieldDone from '../../assets/images/icons/shield_done.svg'
import ShieldFail from '../../assets/images/icons/shield_fail.svg'
import Show from '../../assets/images/icons/show.svg'
import Star from '../../assets/images/icons/star.svg'
import Swap from '../../assets/images/icons/swap.svg'
import TickSquare from '../../assets/images/icons/tick_square.svg'
import Ticket from '../../assets/images/icons/ticket.svg'
import TicketStar from '../../assets/images/icons/ticket_star.svg'
import TimeCircle from '../../assets/images/icons/time_circle.svg'
import TimeSquare from '../../assets/images/icons/time_square.svg'
import Unlock from '../../assets/images/icons/unlock.svg'
import Upload from '../../assets/images/icons/upload.svg'
import User from '../../assets/images/icons/user.svg'
import User2 from '../../assets/images/icons/user_2.svg'
import Video from '../../assets/images/icons/video.svg'
import Voice from '../../assets/images/icons/voice.svg'
import Voice2 from '../../assets/images/icons/voice_2.svg'
import VolumeDown from '../../assets/images/icons/volume_down.svg'
import VolumeOff from '../../assets/images/icons/volume_off.svg'
import VolumeUp from '../../assets/images/icons/volume_up.svg'
import Wallet from '../../assets/images/icons/wallet.svg'
import Work from '../../assets/images/icons/work.svg'

export const library = {
  add: Add,
  attach: Attach,
  activity: Activity,
  addUser: AddUser,
  arrowDown: ArrowDown,
  arrowDown2: ArrowDown2,
  arrowDown3: ArrowDown3,
  arrowDownCircle: ArrowDownCircle,
  arrowDownSquare: ArrowDownSquare,
  arrowDownCarret: ArrowDownCarret,
  arrowLeft: ArrowLeft,
  arrowLeft2: ArrowLeft2,
  arrowLeft3: ArrowLeft3,
  arrowLeftCircle: ArrowLeftCircle,
  arrowLeftSquare: ArrowLeftSquare,
  arrowRight: ArrowRight,
  arrowRight2: ArrowRight2,
  arrowRight3: ArrowRight3,
  arrowRightCircle: ArrowRightCircle,
  arrowRightSquare: ArrowRightSquare,
  arrowUp: ArrowUp,
  arrowUp2: ArrowUp2,
  arrowUp3: ArrowUp3,
  arrowUpCircle: ArrowUpCircle,
  arrowUpSquare: ArrowUpSquare,
  arrowUpCarret: ArrowUpCarret,
  bag: Bag,
  bag2: Bag2,
  bookmark: Bookmark,
  buy: Buy,
  calendar: Calendar,
  call: Call,
  callMissed: CallMissed,
  callSilent: CallSilent,
  calling: Calling,
  camera: Camera,
  category: Category,
  chart: Chart,
  check: Check,
  chat: Chat,
  closeSquare: CloseSquare,
  danger: Danger,
  delete: Delete,
  discount: Discount,
  discovery: Discovery,
  document: Document,
  download: Download,
  edit: Edit,
  editSquare: EditSquare,
  facebook: Facebook,
  filter: Filter,
  filter2: Filter2,
  folder: Folder,
  flag: Flag,
  game: Game,
  graph: Graph,
  google: Google,
  heart: Heart,
  hide: Hide,
  home: Home,
  image: Image,
  image_2: Image_2,
  infoCircle: InfoCircle,
  infoSquare: InfoSquare,
  link: Link,
  location: Location,
  lock: Lock,
  login: Login,
  logout: Logout,
  menu: Menu,
  message: Message,
  moreCircle: MoreCircle,
  moreSquare: MoreSquare,
  notification: Notification,
  paper: Paper,
  paperDownload: PaperDownload,
  paperFail: PaperFail,
  paperNegative: PaperNegative,
  paperPlus: PaperPlus,
  paperUpload: PaperUpload,
  password: Password,
  play: Play,
  plus: Plus,
  profile: Profile,
  scan: Scan,
  search: Search,
  send: Send,
  setting: Setting,
  shieldDone: ShieldDone,
  shieldFail: ShieldFail,
  show: Show,
  star: Star,
  swap: Swap,
  tickSquare: TickSquare,
  ticket: Ticket,
  ticketStar: TicketStar,
  timeCircle: TimeCircle,
  timeSquare: TimeSquare,
  unlock: Unlock,
  upload: Upload,
  user: User,
  user2: User2,
  video: Video,
  voice: Voice,
  voice2: Voice2,
  volumeDown: VolumeDown,
  volumeOff: VolumeOff,
  volumeUp: VolumeUp,
  wallet: Wallet,
  work: Work
}

export const Wrap = styled.i`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 150ms ease;

  ${({ size }) =>
    size === 'xs' &&
    css`
      svg {
        transform: scale(0.65);
      }
    `}
  ${({ size }) =>
    size === 'x' &&
    css`
      svg {
        transform: scale(0.85);
      }
    `}
  ${({ size }) =>
    size === 'm' &&
    css`
      svg {
        transform: scale(1);
      }
    `}

  svg {
    path,
    circle,
    line,
    rect {
      transition: stroke 150ms ease;

      ${({ stroke }) =>
        stroke &&
        css`
          stroke: ${stroke};
        `}
      ${({ fill }) =>
        fill &&
        css`
          fill: ${fill};
        `}
    }
  }
`

export const Error = styled.p`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 0.65rem;
  border: 1px solid #dedede;
  border-radius: 0.25rem;
  color: red;

  ${({ width, height }) =>
    width &&
    height &&
    css`
      width: ${width}px;
      height: ${height}px;
    `}
`

export const Icon = ({ icon, size, ...props }) => {
  const IconSVG = library[icon]

  if (!IconSVG) {
    return <Error {...props}>Not Found</Error>
  }

  return (
    <Wrap {...props} icon={icon} size={size}>
      <IconSVG />
    </Wrap>
  )
}

Icon.defaultProps = {
  size: 'm',
  width: 20,
  height: 20,
  stroke: null,
  fill: null
}

export default Icon
