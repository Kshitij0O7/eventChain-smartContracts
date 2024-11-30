import '@endo/init';
import { E } from '@endo/far';
// eslint-disable-next-line import/no-unresolved -- https://github.com/avajs/ava/issues/2951
import test from 'ava';
import * as state from '../src/hello-world.js';

test('state', async t => {
    const { publicFacet } = state.start();
    const actual = await E(publicFacet).getRoomCount();
    t.is(actual, 0);
    await E(publicFacet).makeRoom(2);
    t.is(await E(publicFacet).getRoomCount(), 1);
  });