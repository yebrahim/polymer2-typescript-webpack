/// <reference path="../../bower_components/polymer/types/polymer.d.ts" />

export const env: 'dev'|'prod' = process.env.NODE_ENV === 'dev' ? 'dev' : 'prod';
