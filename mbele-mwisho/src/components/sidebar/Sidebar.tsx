import { Calendar, Check, Today, Tomorrow } from '../divideIcons'
import { SidebarItem } from '../sidebarItem'

const fixedMenuItems = [
  {
    href: '/today',
    title: 'Today',
    icon: <Today />,
  },
  {
    href: '/tomorrow',
    title: 'Tomorrow',
    icon: <Tomorrow />,
  },
  {
    href: '/calendar',
    title: 'Calendar',
    icon: <Calendar />,
  },
  {
    href: '/completed',
    title: 'Completed',
    icon: <Check />,
  },
]

const Sidebar = () => {
  return (
    <aside>
      <nav>
        <ul>
          <h2>Task</h2>

          {fixedMenuItems.map(({ icon, title, href }) => {
            return (
              <SidebarItem key={title} icon={icon} label={title} href={href} />
            )
          })}
        </ul>
        <ul>
          <h2>Folder</h2>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
