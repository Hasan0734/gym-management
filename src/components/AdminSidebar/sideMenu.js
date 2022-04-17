import {
  Calendar,
  CheckSquare, Circle, FileText, Grid, Home, MessageSquare
} from "react-feather";

export const menuItem = [
    {id: 1,
     url: '/admin/dashboard',
     title: 'Dashboard',
     short: 'dashboard',
     icon: <Home/>,
     children:[
         
     ]
    },
    {id: 2,
      url: '#',
      title: 'Members',
      short: 'members',
      icon: <FileText/>,
      children: [
          {id: 1,
           url: '/admin/member/add',
           title: 'Add Member',
           icon: <Circle/>
         },
          {id: 2,
           url: '/admin/invoice/member-list',
           title: 'Member List',
           icon: <Circle/>
         },
      ]
     },
    {id: 3,
     url: '/admin/chat',
     title: 'Chat',
     short: 'chat',
     icon: <MessageSquare/>,
     children: []
    },
    {id: 4,
     url: '/admin/todo',
     title: 'Todo',
     short: 'todo',
     icon: <CheckSquare/>,
     children: []
    },
    {id: 5,
     url: '/admin/calendar',
     title: 'Calendar',
     short: 'calendar',
     icon: <Calendar/>,
     children: []
    },
    {id: 6,
     url: '/admin/kanban',
     title: 'Kanban',
     short: 'kanbab',
     icon: <Grid/>,
     children: []
    },
    {id: 7,
     url: '#',
     title: 'Invoice',
     short: 'invoice',
     icon: <FileText/>,
     children: [
         {id: 1,
          url: '/admin/invoice/list',
          title: 'List',
          icon: <Circle/>
        },
         {id: 2,
          url: '/admin/invoice/preview',
          title: 'Preview',
          icon: <Circle/>
        },
         {id: 3,
          url: '/admin/invoice/edit',
          title: 'Edit',
          icon: <Circle/>
        },
         {id: 4,
          url: '/admin/invoice/add',
          title: 'Add',
          icon: <Circle/>
        },
     ]
    }
  
]