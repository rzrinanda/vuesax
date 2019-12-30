/*=========================================================================================
  File Name: mails.js
  Description: mail neeeded for mail application
  Strucutre:
      id 
      sender name
      sender img
      Subject
      cc
      bcc
      message
      attachments - Array
      isStarred - bool
      labels - ['personal', 'company', 'important', 'work', 'private']
      time
      to - array
      replies - array of mails

      mailType - folder name
      *isTrashed - bool
      *isDrafted   - bool
      *isSent    - bool
      *isInboxed - bool
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

import axios from 'axios';

export default [
  
  {
    id: 1,
    sender: 'tommys@mail.com',
    sender_name: 'Tommy Sicilia',
    to: ['johndoe@mail.com'],
    img: 'avatar-s-1.png',
    subject:  'Theme Update',
    cc: [],
    bcc: [],
    message: '<p>Hi John,</p><p><br></p><p>Biscuit lemon drops marshmallow. Cotton candy marshmallow bear claw. Dragée tiramisu cookie cotton candy. Carrot cake sweet roll I love macaroon wafer jelly soufflé I love dragée. Jujubes jelly I love carrot cake topping I love. Sweet candy I love chupa chups dragée. Tart I love gummies. Chocolate bar carrot cake candy wafer candy canes oat cake I love. Sesame snaps icing pudding sweet roll marshmallow. Cupcake brownie sweet roll chocolate bar I love gummies. Biscuit biscuit macaroon sesame snaps macaroon icing I love soufflé caramels. Apple pie candy jelly. I love icing gummi bears jelly-o pie muffin apple pie.</p><p><br></p><p>Marshmallow halvah brownie cake marzipan ice cream marshmallow. I love lollipop toffee croissant liquorice wafer muffin. Lollipop jelly beans caramels lollipop tootsie roll pudding pie macaroon tootsie roll. Oat cake jujubes gummies cake cake powder cupcake soufflé muffin. Chocolate caramels muffin tart. Jelly beans caramels dessert cotton candy liquorice chocolate cake. Chupa chups muffin bear claw I love. Biscuit jujubes soufflé tart caramels pie sugar plum. Croissant jelly beans cake. Ice cream chocolate liquorice dessert cookie chocolate cake. Powder tart sweet roll macaroon croissant. Sweet tootsie roll macaroon gummi bears macaroon. Gingerbread cake tart.</p><p><br></p><p>Regrads,</p><p>Kristeen Sicilia</p>',
    attachments: ['log.txt', 'sheet.xls'],
    isStarred: false,
    labels: ['private'],
    time: 'Mon Dec 10 2018 07:46:00 GMT+0000 (GMT)',
    replies: [],
    mailType: 'inboxed',
    unread: false,
  },
  {
    id: 2,
    sender: 'tressag@mail.com',
    sender_name: 'Tressa Gasskeun',
    to: ['johndoe@mail.com'],
    img: 'avatar-s-2.png',
    subject:  'Company Report',
    cc: ['vrushankbrahmshatriya@mail.com'],
    bcc: ['menka@mail.com'],
    message: ' <p>Hello John,</p><p><br></p><p>Chocolate bar chupa chups sweet roll chocolate muffin macaroon liquorice tart. Carrot cake topping jelly-o cupcake sweet apple pie jelly I love. Chocolate cake I love dessert carrot cake tootsie roll chocolate I love. Tootsie roll pie marzipan sesame snaps. Lemon drops cake I love chocolate I love. Cheesecake croissant croissant cheesecake tootsie roll chocolate cake caramels. I love I love cake jelly. Pastry jelly beans I love I love. I love tootsie roll gummies toffee I love cookie cookie. Brownie tart croissant.</p><p><br></p><p>I love jelly pie. Croissant jelly beans lemon drops oat cake. Cupcake carrot cake ice cream cake cookie jelly-o fruitcake jelly macaroon. Biscuit muffin cupcake chocolate bar lollipop danish.</p><p>Ice cream I love I love lemon drops cotton candy macaroon. Jujubes soufflé oat cake sweet roll bear claw cotton candy cookie toffee tootsie roll. Danish sesame snaps sesame snaps cookie jelly danish chocolate bar.</p><p><br></p><p>Fruitcake pastry bear claw chocolate cookie. Biscuit icing bear claw. Sweet roll liquorice jelly-o muffin toffee I love wafer. Candy pastry halvah. Pie pastry candy canes tart. Fruitcake I love liquorice icing sweet roll macaroon. I love ice cream jelly-o biscuit brownie marzipan topping pudding sesame snaps. Chupa chups brownie brownie cotton candy sugar plum toffee. Tiramisu tootsie roll gingerbread biscuit I love ice cream brownie sesame snaps. I love croissant I love I love brownie pie marshmallow.</p><p><br></p><p>Regrads</p><p>Tressa Gass</p>',
    attachments: ['report.docx'],
    isStarred: true,
    labels: ['company', 'private'],
    time: 'Mon Dec 10 2018 07:55:00 GMT+0000 (GMT)',
    replies: [],
    mailType: 'inboxed',
    unread: true,
  },
  {
    id: 3,
    sender: 'hettiem@mail.com',
    sender_name: 'Hettie Mcerlean',
    to: ['johndoe@mail.com', 'hello@pixinvent.net'],
    img: 'avatar-s-3.png',
    subject:  'Order Delivered',
    cc: [],
    bcc: [],
    message: '<p>Hello John,</p><p><br></p><p>Chocolate bar chupa chups sweet roll chocolate muffin macaroon liquorice tart. Carrot cake topping jelly-o cupcake sweet apple pie jelly I love. Chocolate cake I love dessert carrot cake tootsie roll chocolate I love. Tootsie roll pie marzipan sesame snaps. Lemon drops cake I love chocolate I love. Cheesecake croissant croissant cheesecake tootsie roll chocolate cake caramels. I love I love cake jelly. Pastry jelly beans I love I love. I love tootsie roll gummies toffee I love cookie cookie. Brownie tart croissant.</p><p><br></p><p>I love jelly pie. Croissant jelly beans lemon drops oat cake. Cupcake carrot cake ice cream cake cookie jelly-o fruitcake jelly macaroon. Biscuit muffin cupcake chocolate bar lollipop danish.</p><p>Ice cream I love I love lemon drops cotton candy macaroon. Jujubes soufflé oat cake sweet roll bear claw cotton candy cookie toffee tootsie roll. Danish sesame snaps sesame snaps cookie jelly danish chocolate bar.</p><p><br></p><p>Fruitcake pastry bear claw chocolate cookie. Biscuit icing bear claw. Sweet roll liquorice jelly-o muffin toffee I love wafer. Candy pastry halvah. Pie pastry candy canes tart. Fruitcake I love liquorice icing sweet roll macaroon. I love ice cream jelly-o biscuit brownie marzipan topping pudding sesame snaps. Chupa chups brownie brownie cotton candy sugar plum toffee. Tiramisu tootsie roll gingerbread biscuit I love ice cream brownie sesame snaps. I love croissant I love I love brownie pie marshmallow.</p><p><br></p><p>Regrads</p><p>Hettie Mcerlean</p>',
    attachments: [],
    isStarred: false,
    labels: ['company'],
    time: 'Mon Dec 10 2018 08:35:00 GMT+0000 (GMT)',
    replies: [
      {
        id: 4,
        sender: 'johndoe@mail.com',
        sender_name: 'John Doe',
        to: ['hettiem@mail.com'],
        img: 'avatar-s-11.png',
        subject:  '',
        cc: [],
        bcc: [],
        message: '<p>Hello Hettie,</p><p><br></p><p>Marshmallow cookie jelly liquorice. Powder macaroon cake pastry biscuit. Cotton candy cotton candy jelly chocolate bar. Sesame snaps candy gummi bears cake cookie jujubes. Sweet I love sweet roll. Sesame snaps I love marzipan. Jelly powder tootsie roll. Marshmallow pudding cookie fruitcake liquorice powder. I love I love cookie chupa chups fruitcake ice cream I love biscuit I love. Tiramisu apple pie candy canes cookie gummies. Donut toffee bear claw topping jelly-o. Cupcake icing muffin. Cookie brownie wafer pie sweet. Icing sesame snaps halvah toffee marshmallow lemon drops jelly.</p><p><br></p><p>Tiramisu candy canes powder. Powder chocolate bar halvah liquorice cake I love danish. Cake wafer apple pie. Bear claw fruitcake I love marzipan dessert marzipan lollipop. Halvah gingerbread jelly chupa chups tiramisu I love wafer gummi bears. Candy powder caramels candy gummies. Tart tart cupcake brownie. Bear claw gummies toffee. Tiramisu donut cake chocolate bar. Halvah chocolate bar donut jelly-o. Icing candy brownie chocolate. Pastry bear claw halvah gummies chocolate bar chocolate. Apple pie danish wafer I love biscuit.</p><p><br></p><p>Regrads,</p><p>John Doe</p><p><br></p>',
        attachments: [],
        isStarred: false,
        labels: [],
        time: 'Mon Dec 10 2018 10:56:00 GMT+0000 (GMT)',
        replies: [],
        mailType: '',
        unread: false,
      },
      {
        id: 5,
        sender: 'hettiem@mail.com',
        sender_name: 'Hettie Mcerlean',
        to: ['johndoe@mail.com'],
        img: 'avatar-s-3.png',
        subject:  '',
        cc: [],
        bcc: [],
        message: '<p>Oat cake tart danish jelly beans brownie I love. Liquorice I love lollipop chocolate cake carrot cake toffee. Tart muffin candy canes croissant sugar plum lollipop. Macaroon cheesecake marshmallow powder sweet roll bonbon candy apple pie candy canes.</p><p><br></p><p>Regrads,</p><p>Hettie Mcerlean</p><p><br></p>',
        attachments: ['data.docx'],
        isStarred: false,
        labels: [],
        time: 'Mon Dec 10 2018 11:25:00 GMT+0000 (GMT)',
        replies: [],
        mailType: '',
        unread: false,
      },
    ],
    mailType: 'spam',
    unread: false,
  },
]