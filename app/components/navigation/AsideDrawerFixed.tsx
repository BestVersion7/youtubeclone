import { IconText } from "./IconText";
import { IconProps } from "@/app/utils/types";
import Link from "next/link";

type props = {
    drawerIcons1: IconProps[];
    drawerIcons2: IconProps[];
    drawerIcons3: IconProps[];
    drawerIcons4: IconProps[];
    drawerIcons5: IconProps[];
    drawerIcons6: IconProps[];
};

export const AsideDrawerFixed = (props: props) => {
    return (
        <div>
            {props.drawerIcons1.map((item, index) => (
                <IconText key={index} {...item} />
            ))}

            <hr className="my-3" />
            <h2 className="drawer-title">You {`>`}</h2>
            {props.drawerIcons2.map((item, index) => (
                <IconText key={index} {...item} />
            ))}

            <hr className="my-3" />

            <h2 className="drawer-title">Subscriptions</h2>
            {props.drawerIcons3.map((item, index) => (
                <IconText key={index} {...item} subscription={true} />
            ))}
            <hr className="my-3" />

            <h2 className="drawer-title">Explore</h2>
            {props.drawerIcons4.map((item, index) => (
                <IconText key={index} {...item} />
            ))}
            <hr className="my-3" />

            <h2 className="drawer-title">More from Youtube</h2>
            {props.drawerIcons5.map((item, index) => (
                <IconText key={index} {...item} color="text-red-500" />
            ))}
            <hr className="my-3" />

            {props.drawerIcons6.map((item, index) => (
                <IconText key={index} {...item} />
            ))}
            <hr className="my-3" />

            <div className="px-5 grid gap-3 text-sm text-gray-600 font-semibold">
                <div className="">
                    <Link className="inline-block mr-2" href="/">
                        About
                    </Link>
                    <Link className="inline-block mr-2" href="/">
                        Press
                    </Link>
                    <Link className="inline-block mr-2" href="/">
                        Copyright
                    </Link>
                    <Link className="inline-block mr-2" href="/">
                        Contact us
                    </Link>
                    <Link className="inline-block mr-2" href="/">
                        Creators
                    </Link>
                    <Link className="inline-block mr-2" href="/">
                        Advertise
                    </Link>
                    <Link className="inline-block mr-2" href="/">
                        Developers
                    </Link>
                </div>
                <div>
                    <Link className="inline-block mr-2" href="/">
                        Terms
                    </Link>
                    <Link className="inline-block mr-2" href="/">
                        Privacy
                    </Link>
                    <Link className="inline-block mr-2" href="/">
                        Policy & Safety
                    </Link>
                    <Link className="inline-block mr-2" href="/">
                        How Youtube works
                    </Link>
                    <Link className="inline-block mr-2" href="/">
                        Test new features
                    </Link>
                    <Link className="inline-block mr-2" href="/">
                        NFL Sunday Ticket
                    </Link>
                </div>
                <p className="mb-5 text-gray-400">&copy; 2024 Google LLC</p>
            </div>
        </div>
    );
};
