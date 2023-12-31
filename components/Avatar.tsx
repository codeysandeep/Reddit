import Image from "next/image";

import { useSession } from "next-auth/react";

type Props = {
  seed?: string;
  large?: boolean;
};

const Avatar = ({ seed, large }: Props) => {
  const { data: session } = useSession();

  return (
    <div
      className={`relative h-10 w-10 overflow-hidden rounded-full border-[1px] border-blue-50 bg-white ${
        large && "h-[60px] w-[60px]"
      }`}
    >
      <Image
        src={`https://avatars.dicebear.com/api/open-peeps/${
          seed || session?.user?.name || "placeholder"
        }.svg`}
        layout="fill"
        alt="User Avatar"
      />
    </div>
  );
};

export default Avatar;
