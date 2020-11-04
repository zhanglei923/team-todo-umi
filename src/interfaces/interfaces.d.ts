import { history, IRouteComponentProps } from 'umi';

export interface CouponDataType {
  usable?: object[];
  unused?: object[];
  used?: object[];
  expired?: object[];
  couponCode?: string;
  couponBarCode?: string;
}

export interface Props extends IRouteComponentProps {
  // route?: object[];
  // match?: object[];
  // children: React.ReactNode;
}
