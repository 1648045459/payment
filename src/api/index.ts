import request from "@/utils/request";
import { getCookie } from "@/utils/auth";
import type { AxiosRequestConfig } from 'axios';
/**
 * @name: 查询个人积分信息
 * @test: test font
 * @msg:
 * @param {*} data
 * @return {*}
 */
export function getMyIntegral(data: any) {
  let paramsT: AxiosRequestConfig = {
    url: `/v1/chain/balance`, method: "get", headers: {
      'wallet-address': data.wallet_address,
      'authorization': (getCookie("token") ? getCookie("token") : "") + ""
    }
  }
  return request(paramsT);
}

/**
 * @name: 所有平台积分列表
 * @test: test font
 * @msg:
 * @param {*} data
 * @return {*}
 */
export function getIntegralByUser(data: any) {
  return request({
    url: `/v1/integrals`,
    headers: {
      "authorization": (getCookie("token") ? getCookie("token") : "") + "",
      "wallet-address": data.wallet_address
    },
    method: "get"
  });
}

/**
 * @name: 积分详情
 * @test: test font
 * @msg:
 * @param {*} data
 * @return {*}
 */
export function getIntegralDetails(data: any) {
  return request({
    url: `/v1/integral/${data.account}`,
    headers: {
      "authorization": (getCookie("token") ? getCookie("token") : "") + "",
      "wallet-address": data.wallet_address
    },
    method: "get"
  });
}

/**
 * @name: 交易日志列表
 * @test: test font
 * @msg:
 * @param {*} data
 * @return {*}
 */
export function transactionsLogList(data: any) {
  return request({
    url: `/v1/transactions`,
    headers: {
      "authorization": (getCookie("token") ? getCookie("token") : "") + "",
      "wallet-address": data.wallet_address
    },
    method: "get",
    params: data.params
  });
}

/**
 * @name: 正在交易列表
 * @test: test font
 * @msg:
 * @param {*} data
 * @return {*}
 */
export function transactionsPendingList(data: any) {
  return request({
    url: `/v1/trade/pending`,
    headers: {
      "authorization": (getCookie("token") ? getCookie("token") : "") + "",
      "wallet-address": data.wallet_address
    },
    method: "get"
  });
}

/**
 * @name: 交易详情
 * @test: test font
 * @msg:
 * @param {*} data
 * @return {*}
 */
export function transactionsDetails(data: any) {
  return request({
    url: `/v1/transaction/${data.txHash}`,
    headers: {
      "authorization": (getCookie("token") ? getCookie("token") : "") + "",
    },
    method: "get"
  });
}

/**
 * @name: 提交交易
 * @test: test font
 * @msg:
 * @param {*} data
 * @return {*}
 */
export function submitTrade(data: any) {
  return request({
    url: `/v1/trade`,
    headers: {
      "authorization": (getCookie("token") ? getCookie("token") : "") + "",
    },
    method: "post",
    data: data
  });
}

/**
 * @name: 当前交易排队数量
 * @test: test font
 * @msg:
 * @param {*} data
 * @return {*}
 */
export function getNonce() {
  return request({
    url: `/v1/trade/count`,
    headers: {
      "authorization": (getCookie("token") ? getCookie("token") : "") + "",
    },
    method: "get"
  });
}

/**
 * @name:  计算gas
 * @test: test font
 * @msg:
 * @param {*} data
 * @return {*}
 */
export function getGas(data: any) {
  return request({
    url: `/v1/trade/gas`,
    headers: {
      "authorization": (getCookie("token") ? getCookie("token") : "") + "",
    },
    method: "post",
    data: data
  });
}
