import {request} from "@/network/request";

export function getHomeMUltidata() {
  return request({
    url: '/home/multidata'
  })
}
