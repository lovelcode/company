export interface ButtonProps {
  title?: string;
  bg?: "gradient" | "background" | "";
  type?:
    | "box1"
    | "box2"
    | "box3"
    | "box4"
    | "box5"
    | "box6"
    | "box7"
    | "box8"
    | "box9"; // به دلخواه تعیین کنید
  href: string;
  shadow?: boolean;
}
export interface PlanProps {
  title?: string;
  href: string;
  price: number;
  options: {
    option1: number;
    option2: number;
    option3: boolean;
    option4: boolean;
    option5: boolean;
    option6: number;
    option7: boolean;
    option8: number;
  };
}
export interface BriefFeacherProps {
  title?: string;
  src: string;
}
export interface SocialmediaProps {
  title: string;
  bg: string;
  iconsm: string;
  iconmd: string;
}
export interface FeaturesOfThePlanProps {
  id: number;
}


export interface Feature {
  id: number;
  title: string;
  addLink: string;
  editLink: string;
}

export interface ApplicationArr {
  id: number;
  title: string;
  Link: string;
  allFeaturesApp: Feature[];
}

export interface ApplicationProps {
  title: string;
  link: string;
  allFeaturesApp: Feature[];
}
