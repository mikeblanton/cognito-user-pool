"use strict";

let AmazonCognitoIdentity = require("amazon-cognito-identity-js");
let CognitoIdentityWrapper = {
  poolData: null,
  Methods: {
    login: function (body, cb) {
      return require('./login')(this.Parent.poolData, body, cb);
    },
    signup: function(body, cb) {
      return require('./signup')(this.Parent.poolData, body, cb);
    },
    signupConfirm: function(body, cb) {
      return require('./signupConfirm')(this.Parent.poolData, body, cb);
    },
    signupResend: function(body, cb) {
      return require('./signupResend')(this.Parent.poolData, body, cb);
    },
    loginMfa: function(body, cb) {
      return require('./loginMfa')(this.Parent.poolData, body, cb);
    },
    loginNewPasswordRequired: function(body, cb) {
      return require('./loginNewPasswordRequired')(this.Parent.poolData, body, cb);
    },
    logout: function(body, cb) {
      return require('./logout')(this.Parent.poolData, body, cb);
    },
    passwordForgot: function(body, cb) {
      return require('./passwordForgot')(this.Parent.poolData, body, cb);
    },
    passwordReset: function(body, cb) {
      return require('./passwordReset')(this.Parent.poolData, body, cb);
    },
    passwordChange: function(body, cb) {
      return require('./passwordChange')(this.Parent.poolData, body, cb);
    },
    profile: function(body, cb) {
      return require('./profile')(this.Parent.poolData, body, cb);
    },
    profileEdit: function(body, cb) {
      return require('./profileEdit')(this.Parent.poolData, body, cb);
    },
    profileEditPhoneNumber: function(body, cb) {
      return require('./profileEditPhoneNumber')(this.Parent.poolData, body, cb);
    },
    setMfa: function(body, cb) {
      return require('./setMfa')(this.Parent.poolData, body, cb);
    },
    getMfa: function(body, cb) {
      return require('./getMfa')(this.Parent.poolData, body, cb);
    },
    refreshSession: function(body, cb) {
      return require('./refreshSession')(this.Parent.poolData, body, cb);
    },
  },
  Init: function (poolData) {
    this.poolData = poolData;
    this.Methods.Parent = this;
    return this;
  }
};

module.exports = function(poolData) {
  CognitoIdentityWrapper.Init(poolData);
  return CognitoIdentityWrapper.Methods;
};
