import { trendMicro } from './products/trendMicro';
import { m365Business } from './products/m365Business';
import { esetInternetSecurity } from './products/esetInternetSecurity';
import { officeHomeBusiness } from './products/officeHomeBusiness';
import { adobeCreativeCloud } from './products/adobeCreativeCloud';
import { windowsServer } from './products/windowsServer';
import { office2021 } from './products/office2021';
import { windows11Pro } from './products/windows11Pro';
import { visio } from './products/visio';
import { office2019 } from './products/office2019';
import { autodeskInventorProfessional } from './products/autodeskInventorProfessional';
import { autodeskAutoCAD } from './products/autodeskAutoCAD';
import { autodeskInfraWorks } from './products/autodeskInfraWorks';
import { corelDraw } from './products/corelDraw';
import { autodeskMaya } from './products/autodeskMaya';
import { civil3D } from './products/civil3D';
import { autodesk3dsMax } from './products/autodesk3dsMax';
import { autodeskRevit } from './products/autodeskRevit';
import { fusion360 } from './products/fusion360';
import { autodeskAECCollection } from './products/autodeskAECCollection';
import { autodeskBIM360 } from './products/autodeskBIM360';
import { autodeskProductDesignManufacturingCollection } from './products/autodeskProductDesignManufacturingCollection';
import { adobeAcrobatPro } from './products/adobeAcrobatPro';
import { bitdefender } from './products/bitdefender';
import { microsoftProject } from './products/microsoftProject';
import { kaspersky } from './products/kaspersky';
import { parallelsDesktop } from './products/parallelsDesktop';
import { m365Subscriptions } from './products/m365Subscriptions';
import { newProduct1 } from './products/newProduct1';

const allProducts = [
  trendMicro,
  autodeskAutoCAD,
  m365Business,
  esetInternetSecurity,
  officeHomeBusiness,
  adobeCreativeCloud,
  windowsServer,
  office2021,
  windows11Pro,
  fusion360,
  visio,
  office2019,
  autodeskInventorProfessional,
  autodeskInfraWorks,
  autodeskBIM360,
  adobeAcrobatPro,
  bitdefender,
  corelDraw,
  autodeskProductDesignManufacturingCollection,
  autodeskMaya,
  civil3D,
  autodesk3dsMax,
  autodeskRevit,
  autodeskAECCollection,
  microsoftProject,
  kaspersky,
  parallelsDesktop,
  m365Subscriptions,
  newProduct1
];

const categorizeProduct = (product) => {
  const name = product.name.toLowerCase();
  const category = product.category ? product.category.toLowerCase() : '';

  if (category === 'autodesk' || name.includes('autodesk') || name.includes('civil 3d') || name.includes('fusion 360') || product.name === '1') {
    return { ...product, category: 'Autodesk' };
  }
  if (name.includes('trend micro') || name.includes('eset') || name.includes('bitdefender') || name.includes('kaspersky')) {
    return { ...product, category: 'Вирусны хамгаалалт' };
  }
  if (name.includes('office') || name.includes('microsoft 365') || name.includes('m365') || name.includes('visio') || name.includes('project')) {
    return { ...product, category: 'Оффис программ' };
  }
  if (name.includes('adobe') || name.includes('coreldraw')) {
    return { ...product, category: 'График Дизайн' };
  }
  if (name.includes('windows') || name.includes('parallels')) {
    return { ...product, category: 'Үйлдлийн систем' };
  }
  return product;
};

export const products = allProducts.map(categorizeProduct);