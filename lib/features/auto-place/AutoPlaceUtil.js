
import {
  getMid,
  asTRBL
} from '../../layout/LayoutUtil';

var DEFAULT_HORIZONTAL_DISTANCE = 50;

/**
 * Find the new position for the target element to
 * connect to source.
 *
 * @param  {djs.model.Shape} source
 * @param  {djs.model.Shape} element
 *
 * @returns {Point}
 */
export function getNewShapePosition(source, element) {
  var sourceTrbl = asTRBL(source);

  var sourceMid = getMid(source);

  // simply put element right next to source
  return {
    x: sourceTrbl.right + DEFAULT_HORIZONTAL_DISTANCE + element.width / 2,
    y: sourceMid.y
  };
}