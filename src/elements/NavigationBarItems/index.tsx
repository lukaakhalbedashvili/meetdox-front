import Link from 'next/link'
import { FC } from 'react'
interface NavigationBarItemProps {
  href: string
  children: React.ReactNode
  activePath: string
}

const NavigationBarItem: FC<NavigationBarItemProps> = ({
  href,
  children,
  activePath,
}) => (
  <Link href={href}>
    <div className="relative w-[95px]">
      <p className="relative block px-8 py-2 text-black text-xl	 hover:text-gray-400 rounded transition duration-200 z-20 ">
        {children}
      </p>
      <span
        className={`absolute left-1/2 top-1/2 h-[13px] w-1/2 ${
          href === activePath && 'bg-green-400 z-10'
        }`}
      >
        &nbsp;
      </span>
    </div>
  </Link>
)

export default NavigationBarItem
