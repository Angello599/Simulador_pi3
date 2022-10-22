import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'
import * as MdIcons from 'react-icons/md'
import * as GiIcons from 'react-icons/gi'
import * as FiIcons from 'react-icons/fi'
import * as Io5Icons from 'react-icons/io5'


export const SidebarData = [
    {
        title: 'Cursos',
        path: '/cursos',
        icon: <FaIcons.FaBook />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Mate1',
                path: '/cursos/Mate1',
                icon: <IoIcons.IoIosCube />,
            },

            {
                title: 'Quimica',
                path: '/cursos/Quimica',
                icon: <IoIcons.IoIosFlask />,
            },

            {
                title: 'Comu1',
                path: '/cursos/Comu1',
                icon: <IoIcons.IoIosCreate />,
            },

            {
                title: 'Progra1',
                path: '/cursos/Progra1',
                icon: <IoIcons.IoIosCode />,
            }
        ]
    },

    {
        title: 'Vida',
        icon: <FaIcons.FaCalendarDay />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Familia',
                description: 'time to take off',
                icon: <MdIcons.MdFamilyRestroom />,
            },

            {
                title: 'Sueño',
                description: 'time to take off',

                icon: <GiIcons.GiNightSleep />,
            },

            {
                title: 'Comidas',
                description: 'time to take off',
               
                icon: <Io5Icons.IoFastFood />,
            },

            {
                title: 'Responsabilidades',
                description: 'time to take off',
            
                icon: <RiIcons.RiHome2Fill />,
            }
        ]
    },
]
