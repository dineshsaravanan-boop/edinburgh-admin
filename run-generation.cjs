const fs = require('fs');
const path = require('path');
const https = require('https');
const cheerio = require('cheerio');

const screens = [
  {
    name: 'ProductModeration',
    url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sX2JlMjNmNWMwZTVmZjQ3ZDg5OGUwNzFiMDY5NjEzZTM0EgsSBxDui8rW-Q8YAZIBJAoKcHJvamVjdF9pZBIWQhQxNzY2MzE0NDIxODc3OTY0NDc3NQ&filename=&opi=89354086'
  },
  {
    name: 'PlatformAnalytics',
    url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzQ4ZTg0MmQ0NjViZjQ2OGZhZjE5MmRiZmM4YmNhMDFlEgsSBxDui8rW-Q8YAZIBJAoKcHJvamVjdF9pZBIWQhQxNzY2MzE0NDIxODc3OTY0NDc3NQ&filename=&opi=89354086'
  },
  {
    name: 'ExecutiveDashboard',
    url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzg4ZDA3YTI2ZTBiNDQ0M2I5MTJjNjFmYWE1OGZkMWJhEgsSBxDui8rW-Q8YAZIBJAoKcHJvamVjdF9pZBIWQhQxNzY2MzE0NDIxODc3OTY0NDc3NQ&filename=&opi=89354086'
  },
  {
    name: 'WalletMonitoring',
    url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sX2ZkMzQwMjdmNDQ2MzQ3MGNhNDU0MDMzNDYxMWQwZWNkEgsSBxDui8rW-Q8YAZIBJAoKcHJvamVjdF9pZBIWQhQxNzY2MzE0NDIxODc3OTY0NDc3NQ&filename=&opi=89354086'
  },
  {
    name: 'TransactionMonitoring',
    url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sX2VjYWFhYTBkMzkxZTRhNDM5M2ZjNDgwMmQ3NjU5NDhjEgsSBxDui8rW-Q8YAZIBJAoKcHJvamVjdF9pZBIWQhQxNzY2MzE0NDIxODc3OTY0NDc3NQ&filename=&opi=89354086'
  },
  {
    name: 'UserDetails',
    url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzZjYWM4NWY5NjgyYjRjMTc4Y2NhYjRkNzkyNzI0MjhhEgsSBxDui8rW-Q8YAZIBJAoKcHJvamVjdF9pZBIWQhQxNzY2MzE0NDIxODc3OTY0NDc3NQ&filename=&opi=89354086'
  },
  {
    name: 'CreatorDetails',
    url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzk2ZGMzYmQ2ZmRhZDRiYTRiZjhlZTgzZDhiNWI1YjYyEgsSBxDui8rW-Q8YAZIBJAoKcHJvamVjdF9pZBIWQhQxNzY2MzE0NDIxODc3OTY0NDc3NQ&filename=&opi=89354086'
  },
  {
    name: 'MarketplaceAnalytics',
    url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sX2M2ZDkzNWU4YWZhYzQ3ODU5YTk0ZGNkNDhjNWZkNWUwEgsSBxDui8rW-Q8YAZIBJAoKcHJvamVjdF9pZBIWQhQxNzY2MzE0NDIxODc3OTY0NDc3NQ&filename=&opi=89354086'
  },
  {
    name: 'SellersList',
    url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sX2YyYzNiMmIxNmRmOTQ2OTE5MTU5MTM2OTY2MjhhYjk1EgsSBxDui8rW-Q8YAZIBJAoKcHJvamVjdF9pZBIWQhQxNzY2MzE0NDIxODc3OTY0NDc3NQ&filename=&opi=89354086'
  },
  {
    name: 'ReportedContent',
    url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzZjODc0ZDZjN2I1YjQ1MDA5MTU4ODExMjM2ODYzZDBkEgsSBxDui8rW-Q8YAZIBJAoKcHJvamVjdF9pZBIWQhQxNzY2MzE0NDIxODc3OTY0NDc3NQ&filename=&opi=89354086'
  },
  {
    name: 'Integrations',
    url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sX2I5OGNlZTg2MTI4YjRhNTU4M2RhNDFjZjk3MDZhMmVjEgsSBxDui8rW-Q8YAZIBJAoKcHJvamVjdF9pZBIWQhQxNzY2MzE0NDIxODc3OTY0NDc3NQ&filename=&opi=89354086'
  },
  {
    name: 'ProductDetails',
    url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzgzMDJmOWNhNjVkYTRlNWJhODc3MTAwYzVjNWQxNzI2EgsSBxDui8rW-Q8YAZIBJAoKcHJvamVjdF9pZBIWQhQxNzY2MzE0NDIxODc3OTY0NDc3NQ&filename=&opi=89354086'
  },
  {
    name: 'CreatorsList',
    url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzA1OGM1OTdkZDBlYjRhNGRhNmEwZTQwMmJmZmZhMjAxEgsSBxDui8rW-Q8YAZIBJAoKcHJvamVjdF9pZBIWQhQxNzY2MzE0NDIxODc3OTY0NDc3NQ&filename=&opi=89354086'
  },
  {
    name: 'ContentReviewDetails',
    url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sX2NlZWZiNGMxYjY1NjQ4Njg4MzFkNTJmMDg5MjgzZjUzEgsSBxDui8rW-Q8YAZIBJAoKcHJvamVjdF9pZBIWQhQxNzY2MzE0NDIxODc3OTY0NDc3NQ&filename=&opi=89354086'
  },
  {
    name: 'AuditLogs',
    url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sX2E5MDZlNDkwMjBlNTRhNDViM2IyYjFjMzVlM2ZjZDk0EgsSBxDui8rW-Q8YAZIBJAoKcHJvamVjdF9pZBIWQhQxNzY2MzE0NDIxODc3OTY0NDc3NQ&filename=&opi=89354086'
  },
  {
    name: 'OrderDetails',
    url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sX2JlZWYwOWFiZWM5NjRkNjRiMzdiYzc1OGZlMWU0ZmIyEgsSBxDui8rW-Q8YAZIBJAoKcHJvamVjdF9pZBIWQhQxNzY2MzE0NDIxODc3OTY0NDc3NQ&filename=&opi=89354086'
  },
  {
    name: 'UsersList',
    url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sX2M1MjEyNzAyYmFmMjQ1YTY4MjFmOGU2YmEzYjA4NzlhEgsSBxDui8rW-Q8YAZIBJAoKcHJvamVjdF9pZBIWQhQxNzY2MzE0NDIxODc3OTY0NDc3NQ&filename=&opi=89354086'
  },
  {
    name: 'SystemSettings',
    url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sX2EyOTYwMzM4MDM4MzQ3NDE4ZmQyZGIzOTg5YmZhZGM0EgsSBxDui8rW-Q8YAZIBJAoKcHJvamVjdF9pZBIWQhQxNzY2MzE0NDIxODc3OTY0NDc3NQ&filename=&opi=89354086'
  },
  {
    name: 'SellerDetails',
    url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sX2Y5MGJkNjMxNmI2OTRiNTA5MWEzMDMzNTQ3YmViZGQzEgsSBxDui8rW-Q8YAZIBJAoKcHJvamVjdF9pZBIWQhQxNzY2MzE0NDIxODc3OTY0NDc3NQ&filename=&opi=89354086'
  },
  {
    name: 'AdminUsers',
    url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sX2UzMGVkNjEyM2VmNjRkYzliODBkZWU5MDM5NzdjNmE3EgsSBxDui8rW-Q8YAZIBJAoKcHJvamVjdF9pZBIWQhQxNzY2MzE0NDIxODc3OTY0NDc3NQ&filename=&opi=89354086'
  },
  {
    name: 'RolesPermissions',
    url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzY0NDliMWQ2OTAxZDRjMDhiODMzZWIxMzk2OThiZmU1EgsSBxDui8rW-Q8YAZIBJAoKcHJvamVjdF9pZBIWQhQxNzY2MzE0NDIxODc3OTY0NDc3NQ&filename=&opi=89354086'
  },
  {
    name: 'CreatorAnalytics',
    url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sX2RmNDY1NDU2ZjI3NjQ2NWNiNTEzNWY2MjkzZDZjZjdhEgsSBxDui8rW-Q8YAZIBJAoKcHJvamVjdF9pZBIWQhQxNzY2MzE0NDIxODc3OTY0NDc3NQ&filename=&opi=89354086'
  },
  {
    name: 'OrderMonitoring',
    url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sX2E3MjRiMDA5YWNiNDRhYTY5YWI5NGNhNjNlZWYwZDNhEgsSBxDui8rW-Q8YAZIBJAoKcHJvamVjdF9pZBIWQhQxNzY2MzE0NDIxODc3OTY0NDc3NQ&filename=&opi=89354086'
  },
  {
    name: 'ModerationDashboard',
    url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sX2FjNzYxMDBlMDhjMDRlYWJhOGI3NGI2NTIxODY5NmI5EgsSBxDui8rW-Q8YAZIBJAoKcHJvamVjdF9pZBIWQhQxNzY2MzE0NDIxODc3OTY0NDc3NQ&filename=&opi=89354086'
  }
];

const templatesDir = path.join(__dirname, 'templates');
const screensDir = path.join(__dirname, 'src', 'screens');

if (!fs.existsSync(templatesDir)) {
  fs.mkdirSync(templatesDir, { recursive: true });
}
if (!fs.existsSync(screensDir)) {
  fs.mkdirSync(screensDir, { recursive: true });
}

function downloadFile(item) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(path.join(templatesDir, `${item.name}.html`));
    https.get(item.url, response => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded ${item.name}`);
        resolve();
      });
    }).on('error', err => {
      fs.unlink(path.join(templatesDir, `${item.name}.html`), () => {});
      console.error(`Error downloading ${item.name}:`, err.message);
      reject(err);
    });
  });
}

function camelCase(str) {
  return str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
}

function parseStyle(styleStr) {
  if (!styleStr) return '';
  const declarations = styleStr.split(';').map(d => d.trim()).filter(Boolean);
  const obj = {};
  for (const decl of declarations) {
    const index = decl.indexOf(':');
    if (index === -1) continue;
    const key = decl.slice(0, index).trim();
    let val = decl.slice(index + 1).trim();
    obj[camelCase(key)] = val;
  }
  return `style={${JSON.stringify(obj)}}`;
}

function processAndWireFile(componentName) {
  const filePath = path.join(templatesDir, `${componentName}.html`);
  if (!fs.existsSync(filePath)) {
    console.error(`Template not found: ${filePath}`);
    return;
  }
  const html = fs.readFileSync(filePath, 'utf-8');
  const $ = cheerio.load(html);

  // Strip scripts and styles
  $('script').remove();
  $('style').remove();

  // Strip comment nodes from DOM
  $('*').contents().filter((i, el) => el.type === 'comment').remove();
  $.root().contents().filter((i, el) => el.type === 'comment').remove();

  // Position confetti canvas absolutely so it does not participate in flex layout
  $('#confetti, .confetti-canvas').each((i, el) => {
    $(el).addClass('absolute inset-0 w-full h-full pointer-events-none');
  });

  // Strip layout wrapper tags (Boilerplate sidebars, headers and footers)
  $('aside').remove();
  $('header').remove();
  $('footer').remove();

  // Remove duplicate top nav bars containing SuperApp Admin
  $('nav').first().each((i, el) => {
    const text = $(el).text();
    const hasBrand = text.includes("SuperApp Admin");
    if (hasBrand) {
      $(el).remove();
    }
  });

  // Remove duplicate breadcrumbs containers (typically a div with chevron_right inside page contents)
  $('div').each((i, el) => {
    const hasChevron = $(el).find('.material-symbols-outlined:contains("chevron_right")').length > 0;
    if (hasChevron) {
      // Check if it's actually a breadcrumb div (should only contain inline elements like span and a)
      const hasBlockChildren = $(el).find('div, section, table, tbody, tr, td, main, p, h1, h2, h3, h4, h5, h6, select, input, button').length > 0;
      if (!hasBlockChildren && $(el).children().length <= 8) {
        $(el).remove();
      }
    }
  });

  // Clean layout container offset parameters in the main pane (literal matching without \b word boundaries)
  const mainTag = $('main');
  if (mainTag.length) {
    let classes = mainTag.attr('class') || '';
    classes = classes
      .replace(/ml-\[240px\]/g, '')
      .replace(/ml-sidebar-width/g, '')
      .replace(/pt-14/g, '')
      .replace(/min-h-screen/g, '')
      .replace(/h-screen/g, '')
      .trim();
    mainTag.attr('class', classes);
  }

  // Screen-Specific Drill-Downs and Routing Details
  if (componentName === 'ExecutiveDashboard') {
    // Metric Card clicks: select specific cards only
    $('div.bg-surface-container-lowest, div.p-4, div.h-32').each((i, el) => {
      const text = $(el).text().toLowerCase();
      if (text.includes('total users') || text.includes('active sessions')) {
        $(el).attr('onclick', 'navigate("/users")').addClass('cursor-pointer hover:border-primary transition-colors');
      } else if (text.includes('total sellers')) {
        $(el).attr('onclick', 'navigate("/sellers")').addClass('cursor-pointer hover:border-primary transition-colors');
      } else if (text.includes('total creators')) {
        $(el).attr('onclick', 'navigate("/creators")').addClass('cursor-pointer hover:border-primary transition-colors');
      } else if (text.includes('total orders')) {
        $(el).attr('onclick', 'navigate("/orders")').addClass('cursor-pointer hover:border-primary transition-colors');
      } else if (text.includes('gross merchandise value') || text.includes('revenue') || text.includes('wallet')) {
        $(el).attr('onclick', 'navigate("/finance/wallets")').addClass('cursor-pointer hover:border-primary transition-colors');
      } else if (text.includes('platform health') || text.includes('uptime')) {
        $(el).attr('onclick', 'navigate("/analytics/platform")').addClass('cursor-pointer hover:border-primary transition-colors');
      }
    });

    // Recent reports / elements clicks
    $('tr').each((i, el) => {
      const text = $(el).text();
      if (text.includes('USR-') || text.includes('UID_')) {
        $(el).attr('onclick', 'navigate("/users/USR-98243")').addClass('cursor-pointer');
      } else if (text.includes('ORD-')) {
        $(el).attr('onclick', 'navigate("/orders/ORD-9284-AX")').addClass('cursor-pointer');
      } else if (text.includes('PROD-')) {
        $(el).attr('onclick', 'navigate("/marketplace/products/PROD-1029")').addClass('cursor-pointer');
      }
    });
  }

  if (componentName === 'UsersList') {
    // Clicking a user row goes to UserDetails
    $('tbody tr, tr.group').attr('onclick', 'navigate("/users/USR-98243")').addClass('cursor-pointer');
  }

  if (componentName === 'UserDetails') {
    // Breadcrumb: back to users list
    $('*').each((i, el) => {
      const text = $(el).text().trim();
      if (text === 'Users' || text === 'User Management') {
        $(el).attr('onclick', 'navigate("/users")');
        $(el).addClass('cursor-pointer hover:underline');
      }
    });
    $('button:contains("Back")').attr('onclick', 'navigate("/users")');
  }

  if (componentName === 'SellersList') {
    // Clicking a seller row goes to SellerDetails
    $('tbody tr, tr.group').attr('onclick', 'navigate("/sellers/SEL-2983")').addClass('cursor-pointer');
  }

  if (componentName === 'SellerDetails') {
    // Breadcrumb back to sellers list
    $('*').each((i, el) => {
      const text = $(el).text().trim();
      if (text === 'Sellers' || text === 'Seller Management') {
        $(el).attr('onclick', 'navigate("/sellers")');
        $(el).addClass('cursor-pointer hover:underline');
      }
    });
    $('button:contains("Back")').attr('onclick', 'navigate("/sellers")');
  }

  if (componentName === 'CreatorsList') {
    // Clicking creator row goes to CreatorDetails
    $('tbody tr, tr.group').attr('onclick', 'navigate("/creators/CRE-1049")').addClass('cursor-pointer');
  }

  if (componentName === 'CreatorDetails') {
    // Breadcrumb back to creators list
    $('*').each((i, el) => {
      const text = $(el).text().trim();
      if (text === 'Creators' || text === 'Creator Management') {
        $(el).attr('onclick', 'navigate("/creators")');
        $(el).addClass('cursor-pointer hover:underline');
      }
    });
    $('button:contains("Back")').attr('onclick', 'navigate("/creators")');
  }

  if (componentName === 'ProductModeration') {
    // Clicking product row/card goes to ProductDetails
    $('tbody tr, tr.group, div.border').attr('onclick', 'navigate("/marketplace/products/PROD-1029")').addClass('cursor-pointer');
  }

  if (componentName === 'ProductDetails') {
    // Breadcrumb back
    $('*').each((i, el) => {
      const text = $(el).text().trim();
      if (text === 'Product Moderation' || text === 'Moderation Queue' || text === 'Marketplace') {
        $(el).attr('onclick', 'navigate("/marketplace/moderation")');
        $(el).addClass('cursor-pointer hover:underline');
      }
    });
    $('button:contains("Back")').attr('onclick', 'navigate("/marketplace/moderation")');
    $('button:contains("Approve")').attr('onclick', 'navigate("/marketplace/moderation")');
    $('button:contains("Reject")').attr('onclick', 'navigate("/marketplace/moderation")');
  }

  if (componentName === 'OrderMonitoring') {
    // Clicking order row goes to OrderDetails
    $('tbody tr, tr.group').attr('onclick', 'navigate("/orders/ORD-9284-AX")').addClass('cursor-pointer');
  }

  if (componentName === 'OrderDetails') {
    // Breadcrumb back
    $('*').each((i, el) => {
      const text = $(el).text().trim();
      if (text === 'Orders' || text === 'Order Monitoring') {
        $(el).attr('onclick', 'navigate("/orders");');
        $(el).addClass('cursor-pointer hover:underline');
      }
    });
    $('button:contains("Back")').attr('onclick', 'navigate("/orders")');
  }

  if (componentName === 'ModerationDashboard') {
    // Drilldown to reported content list
    $('*').each((i, el) => {
      const text = $(el).text().trim().toLowerCase();
      if (text.includes('reported content') || text.includes('review queue') || text.includes('view reports')) {
        $(el).attr('onclick', 'navigate("/moderation/reports")');
        $(el).addClass('cursor-pointer');
      }
    });
    
    // Row click
    $('tbody tr, tr.group').attr('onclick', 'navigate("/moderation/reports/REP-3928")').addClass('cursor-pointer');
  }

  if (componentName === 'ReportedContent') {
    // Row click goes to ContentReviewDetails
    $('tbody tr, tr.group').attr('onclick', 'navigate("/moderation/reports/REP-3928")').addClass('cursor-pointer');
    
    // Breadcrumb to Dashboard
    $('*').each((i, el) => {
      const text = $(el).text().trim();
      if (text === 'Moderation Dashboard' || text === 'Dashboard') {
        $(el).attr('onclick', 'navigate("/moderation")');
        $(el).addClass('cursor-pointer hover:underline');
      }
    });
  }

  if (componentName === 'ContentReviewDetails') {
    // Breadcrumbs
    $('*').each((i, el) => {
      const text = $(el).text().trim();
      if (text === 'Reported Content' || text === 'Reports') {
        $(el).attr('onclick', 'navigate("/moderation/reports")');
        $(el).addClass('cursor-pointer hover:underline');
      }
    });
    $('button:contains("Back")').attr('onclick', 'navigate("/moderation/reports")');
    $('button:contains("Approve")').attr('onclick', 'navigate("/moderation/reports")');
    $('button:contains("Remove")').attr('onclick', 'navigate("/moderation/reports")');
    $('button:contains("Keep")').attr('onclick', 'navigate("/moderation/reports")');
  }

  if (componentName === 'WalletMonitoring') {
    // Navigation tabs
    $('*').each((i, el) => {
      const text = $(el).text().trim().toLowerCase();
      if (text === 'transaction flow' || text === 'transactions' || text.includes('transaction monitoring')) {
        $(el).attr('onclick', 'navigate("/finance/transactions")');
        $(el).addClass('cursor-pointer');
      }
    });
  }

  if (componentName === 'TransactionMonitoring') {
    // Navigation tabs
    $('*').each((i, el) => {
      const text = $(el).text().trim().toLowerCase();
      if (text === 'wallet balances' || text === 'wallets' || text.includes('wallet monitoring')) {
        $(el).attr('onclick', 'navigate("/finance/wallets")');
        $(el).addClass('cursor-pointer');
      }
    });
  }

  if (componentName === 'PlatformAnalytics') {
    // Navigation tabs
    $('*').each((i, el) => {
      const text = $(el).text().trim().toLowerCase();
      if (text === 'marketplace' || text === 'marketplace analytics') {
        $(el).attr('onclick', 'navigate("/analytics/marketplace")');
        $(el).addClass('cursor-pointer');
      } else if (text === 'creator' || text === 'creator analytics') {
        $(el).attr('onclick', 'navigate("/analytics/creators")');
        $(el).addClass('cursor-pointer');
      }
    });
  }

  if (componentName === 'MarketplaceAnalytics') {
    // Navigation tabs
    $('*').each((i, el) => {
      const text = $(el).text().trim().toLowerCase();
      if (text === 'platform' || text === 'platform analytics' || text === 'overview') {
        $(el).attr('onclick', 'navigate("/analytics/platform")');
        $(el).addClass('cursor-pointer');
      } else if (text === 'creator' || text === 'creator analytics') {
        $(el).attr('onclick', 'navigate("/analytics/creators")');
        $(el).addClass('cursor-pointer');
      }
    });
  }

  if (componentName === 'CreatorAnalytics') {
    // Navigation tabs
    $('*').each((i, el) => {
      const text = $(el).text().trim().toLowerCase();
      if (text === 'platform' || text === 'platform analytics' || text === 'overview') {
        $(el).attr('onclick', 'navigate("/analytics/platform")');
        $(el).addClass('cursor-pointer');
      } else if (text === 'marketplace' || text === 'marketplace analytics') {
        $(el).attr('onclick', 'navigate("/analytics/marketplace")');
        $(el).addClass('cursor-pointer');
      }
    });
  }

  if (componentName === 'RolesPermissions') {
    // Tabs
    $('*').each((i, el) => {
      const text = $(el).text().trim().toLowerCase();
      if (text === 'admin users' || text.includes('admins')) {
        $(el).attr('onclick', 'navigate("/settings/admins")');
        $(el).addClass('cursor-pointer');
      }
    });
  }

  if (componentName === 'AdminUsers') {
    // Tabs
    $('*').each((i, el) => {
      const text = $(el).text().trim().toLowerCase();
      if (text === 'roles & permissions' || text.includes('roles') || text.includes('permissions')) {
        $(el).attr('onclick', 'navigate("/settings/roles")');
        $(el).addClass('cursor-pointer');
      }
    });
  }

  if (componentName === 'Integrations') {
    // Tabs
    $('*').each((i, el) => {
      const text = $(el).text().trim().toLowerCase();
      if (text === 'audit logs' || text === 'audit log') {
        $(el).attr('onclick', 'navigate("/settings/audit-logs")');
        $(el).addClass('cursor-pointer');
      } else if (text === 'system settings' || text === 'system config' || text === 'settings') {
        $(el).attr('onclick', 'navigate("/settings/system")');
        $(el).addClass('cursor-pointer');
      }
    });
  }

  if (componentName === 'AuditLogs') {
    // Tabs
    $('*').each((i, el) => {
      const text = $(el).text().trim().toLowerCase();
      if (text === 'integrations' || text === 'third-party integrations') {
        $(el).attr('onclick', 'navigate("/settings/integrations")');
        $(el).addClass('cursor-pointer');
      } else if (text === 'system settings' || text === 'system config' || text === 'settings') {
        $(el).attr('onclick', 'navigate("/settings/system")');
        $(el).addClass('cursor-pointer');
      }
    });
  }

  if (componentName === 'SystemSettings') {
    // Tabs
    $('*').each((i, el) => {
      const text = $(el).text().trim().toLowerCase();
      if (text === 'integrations' || text === 'third-party integrations') {
        $(el).attr('onclick', 'navigate("/settings/integrations")');
        $(el).addClass('cursor-pointer');
      } else if (text === 'audit logs' || text === 'audit log') {
        $(el).attr('onclick', 'navigate("/settings/audit-logs")');
        $(el).addClass('cursor-pointer');
      }
    });
  }

  // Get remaining body contents
  const bodyClasses = $('body').attr('class') || '';
  const cleanBodyClasses = bodyClasses
    .split(' ')
    .filter(c => {
      const name = c.trim();
      return name && 
        name !== 'flex' && 
        name !== 'h-screen' && 
        name !== 'min-h-screen' && 
        name !== 'overflow-hidden' && 
        name !== 'w-screen' && 
        name !== 'w-full' && 
        name !== 'h-full' && 
        name !== 'cursor-pointer' &&
        !name.startsWith('ml-') &&
        !name.startsWith('pl-');
    })
    .join(' ');

  const content = $('body').html() || '';

  // Parse style strings, attributes, SVG classes
  let jsxContent = content;
  jsxContent = jsxContent.replace(/\sclass=/gi, ' className=');
  jsxContent = jsxContent.replace(/\sfor=/gi, ' htmlFor=');
  jsxContent = jsxContent.replace(/\stabindex=/gi, ' tabIndex=');
  jsxContent = jsxContent.replace(/\sautocomplete=/gi, ' autoComplete=');
  jsxContent = jsxContent.replace(/\sautofocus/gi, ' autoFocus');
  jsxContent = jsxContent.replace(/\sreadonly/gi, ' readOnly');
  jsxContent = jsxContent.replace(/\smaxlength=/gi, ' maxLength=');
  jsxContent = jsxContent.replace(/\snovalidate/gi, ' noValidate');
  jsxContent = jsxContent.replace(/\sonsubmit=/gi, ' onSubmit=');

  // Input bindings
  jsxContent = jsxContent.replace(/\svalue=/gi, ' defaultValue=');
  jsxContent = jsxContent.replace(/\schecked/gi, ' defaultChecked');

  // SVG attribute fixes
  jsxContent = jsxContent.replace(/\sstroke-width=/gi, ' strokeWidth=');
  jsxContent = jsxContent.replace(/\sstroke-linecap=/gi, ' strokeLinecap=');
  jsxContent = jsxContent.replace(/\sstroke-linejoin=/gi, ' strokeLinejoin=');
  jsxContent = jsxContent.replace(/\sfill-rule=/gi, ' fillRule=');
  jsxContent = jsxContent.replace(/\sclip-rule=/gi, ' clipRule=');
  jsxContent = jsxContent.replace(/\sviewbox=/gi, ' viewBox=');

  // Self-close tags
  jsxContent = jsxContent.replace(/<input([^>]*?)(?<!\/)>/gi, '<input$1 />');
  jsxContent = jsxContent.replace(/<img([^>]*?)(?<!\/)>/gi, '<img$1 />');
  jsxContent = jsxContent.replace(/<br([^>]*?)(?<!\/)>/gi, '<br$1 />');
  jsxContent = jsxContent.replace(/<hr([^>]*?)(?<!\/)>/gi, '<hr$1 />');

  // Inline Style parsing
  jsxContent = jsxContent.replace(/style="([^"]*)"/gi, (match, styleStr) => {
    return parseStyle(styleStr);
  });

  // Clean full screen containers and sidebar margins inside JSX content
  jsxContent = jsxContent
    .replace(/class="flex h-screen w-full"/gi, 'className="w-full flex flex-col"')
    .replace(/className="flex h-screen w-full"/gi, 'className="w-full flex flex-col"')
    .replace(/class="flex h-screen overflow-hidden"/gi, 'className="w-full flex flex-col"')
    .replace(/className="flex h-screen overflow-hidden"/gi, 'className="w-full flex flex-col"')
    .replace(/class="flex h-\[calc\(100vh-3\.5rem\)\]"/gi, 'className="w-full flex flex-col"')
    .replace(/className="flex h-\[calc\(100vh-3\.5rem\)\]"/gi, 'className="w-full flex flex-col"')
    .replace(/class="flex h-\[calc\(100vh-56px\)\]"/gi, 'className="w-full flex flex-col"')
    .replace(/className="flex h-\[calc\(100vh-56px\)\]"/gi, 'className="w-full flex flex-col"')
    .replace(/h-\[calc\(100vh-56px\)\]/gi, '')
    .replace(/h-\[calc\(100vh-3\.5rem\)\]/gi, '')
    .replace(/ml-\[sidebar-width\]/gi, '')
    .replace(/ml-0 lg:\s+p-container-padding/gi, 'p-container-padding');

  // Wire up onclick navigation to React route calls
  jsxContent = jsxContent.replace(/onclick="navigate\((?:&quot;|'|&apos;)?(.*?)(?:&quot;|'|&apos;)?\)"/gi, (match, route) => {
    return `onClick={(e) => { e.preventDefault(); navigate("${route}"); }}`;
  });

  // Leftover onclick cleanup
  jsxContent = jsxContent.replace(/onclick="([^"]*)"/gi, 'onClick={(e) => { e.preventDefault(); }}');

  // Remove comment tags leftover
  jsxContent = jsxContent.replace(/<!--[\s\S]*?-->/g, '');

  // Table colspan
  jsxContent = jsxContent.replace(/\scolspan="(\d+)"/gi, ' colSpan={$1}');
  jsxContent = jsxContent.replace(/\scolspan=/gi, ' colSpan=');

  // Forms
  jsxContent = jsxContent.replace(/onSubmit="return\s+false;?"/gi, 'onSubmit={(e) => e.preventDefault()}');
  jsxContent = jsxContent.replace(/onSubmit="([^"]*)"/gi, 'onSubmit={(e) => e.preventDefault()}');

  // Numeric fields
  jsxContent = jsxContent.replace(/\srows="(\d+)"/gi, ' rows={$1}');
  jsxContent = jsxContent.replace(/\scols="(\d+)"/gi, ' cols={$1}');
  jsxContent = jsxContent.replace(/\stabIndex="(-?\d+)"/gi, ' tabIndex={$1}');
  jsxContent = jsxContent.replace(/\smaxLength="(\d+)"/gi, ' maxLength={$1}');

  // Boolean attributes
  jsxContent = jsxContent.replace(/\sdisabled="[^"]*"/gi, ' disabled={true}');
  jsxContent = jsxContent.replace(/\sreadOnly="[^"]*"/gi, ' readOnly={true}');
  jsxContent = jsxContent.replace(/\srequired="[^"]*"/gi, ' required={true}');
  jsxContent = jsxContent.replace(/\sdefaultChecked="[^"]*"/gi, ' defaultChecked={true}');
  jsxContent = jsxContent.replace(/\sselected="[^"]*"/gi, ' selected={true}');

  // Unescape standard XML/HTML character entities
  jsxContent = jsxContent.replace(/&amp;/g, '&');
  jsxContent = jsxContent.replace(/&nbsp;/g, ' ');

  const componentCode = `import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ${componentName}() {
  const navigate = useNavigate();

  return (
    <div className="${cleanBodyClasses}">
      ${jsxContent}
    </div>
  );
}
`;

  fs.writeFileSync(path.join(screensDir, `${componentName}.tsx`), componentCode);
  console.log(`Converted and Wired ${componentName}`);
}

async function start() {
  console.log('Starting Edinburgh Admin Portal templates download...');
  for (const item of screens) {
    try {
      await downloadFile(item);
    } catch (e) {
      console.error(`Failed to download ${item.name}`, e);
    }
  }
  console.log('All downloads completed! Starting conversion...');
  
  for (const item of screens) {
    try {
      processAndWireFile(item.name);
    } catch (e) {
      console.error(`Failed to convert ${item.name}`, e);
    }
  }
  
  console.log('Conversion and wiring complete. Cleaning up templates folder...');
  try {
    fs.rmSync(templatesDir, { recursive: true, force: true });
  } catch (e) {
    console.error('Failed to clean up templates directory', e);
  }
  console.log('Edinburgh Admin Portal generation finished successfully!');
}

start();
