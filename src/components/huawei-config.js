/*
* Copyright 2020. Huawei Technologies Co., Ltd. All rights reserved.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

import agconnect from '@agconnect/api'
import '@agconnect/instance'

/**
 * Initializes app configuration
 */

export function configInstance(){
  agconnect.instance().configInstance(agConnectConfig);
}

// paste your SDK Code Snippet here, SDK Code Snippet can be found on your project general information

var agConnectConfig = 
{
	"agcgw":{
		"backurl":"connect-dra.hispace.hicloud.com",
		"url":"connect-dra.dbankcloud.cn",
		"websocketbackurl":"connect-ws-dra.hispace.dbankcloud.com",
		"websocketurl":"connect-ws-dra.hispace.dbankcloud.cn"
	},
	"agcgw_all":{
		"CN":"connect-drcn.dbankcloud.cn",
		"CN_back":"connect-drcn.hispace.hicloud.com",
		"DE":"connect-dre.dbankcloud.cn",
		"DE_back":"connect-dre.hispace.hicloud.com",
		"RU":"connect-drru.hispace.dbankcloud.ru",
		"RU_back":"connect-drru.hispace.dbankcloud.cn",
		"SG":"connect-dra.dbankcloud.cn",
		"SG_back":"connect-dra.hispace.hicloud.com"
	},
	"websocketgw_all":{
		"CN":"connect-ws-drcn.hispace.dbankcloud.cn",
		"CN_back":"connect-ws-drcn.hispace.dbankcloud.com",
		"DE":"connect-ws-dre.hispace.dbankcloud.cn",
		"DE_back":"connect-ws-dre.hispace.dbankcloud.com",
		"RU":"connect-ws-drru.hispace.dbankcloud.ru",
		"RU_back":"connect-ws-drru.hispace.dbankcloud.cn",
		"SG":"connect-ws-dra.hispace.dbankcloud.cn",
		"SG_back":"connect-ws-dra.hispace.dbankcloud.com"
	},
	"client":{
		"cp_id":"30086000699684214",
		"product_id":"388421841221558915",
		"client_id":"1193280356850093632",
		"client_secret":"BB5A3727B7DBC0B15094309A817C6125E515CAE6086834E72C89D887D4A2963D",
		"project_id":"388421841221558915",
		"app_id":"172249065902578551",
		"api_key":"DAEDAO/o5fefFSH7hsp0Q+DaCvkZ4hqUmOmQUTBmDAYgvL0N9cpZjGc3Ljl71fkZLzzWAQdXkFpM1ma+Vlmf8Qy1sZfTto2MNJUpAw=="
	},
	"oauth_client":{
		"client_id":"108667239",
		"client_type":7
	},
	"app_info":{
		"app_id":"172249065902578551"
	},
	"service":{
		"analytics":{
			"collector_url":"datacollector-dra.dt.hicloud.com,datacollector-dra.dt.dbankcloud.cn",
			"collector_url_ru":"datacollector-drru.dt.dbankcloud.ru,datacollector-drru.dt.hicloud.com",
			"collector_url_sg":"datacollector-dra.dt.hicloud.com,datacollector-dra.dt.dbankcloud.cn",
			"collector_url_de":"datacollector-dre.dt.hicloud.com,datacollector-dre.dt.dbankcloud.cn",
			"collector_url_cn":"datacollector-drcn.dt.hicloud.com,datacollector-drcn.dt.dbankcloud.cn",
			"resource_id":"p1",
			"channel_id":""
		},
		"edukit":{
			"edu_url":"edukit.edu.cloud.huawei.com.cn",
			"dh_url":"edukit.edu.cloud.huawei.com.cn"
		},
		"search":{
			"url":"https://search-dra.cloud.huawei.com"
		},
		"cloudstorage":{
			"storage_url_sg_back":"https://agc-storage-dra.cloud.huawei.asia",
			"storage_url_ru_back":"https://agc-storage-drru.cloud.huawei.ru",
			"storage_url_ru":"https://agc-storage-drru.cloud.huawei.ru",
			"storage_url_de_back":"https://agc-storage-dre.cloud.huawei.eu",
			"storage_url_de":"https://ops-dre.agcstorage.link",
			"storage_url":"https://agc-storage-drcn.platform.dbankcloud.cn",
			"storage_url_sg":"https://ops-dra.agcstorage.link",
			"storage_url_cn_back":"https://agc-storage-drcn.cloud.huawei.com.cn",
			"storage_url_cn":"https://agc-storage-drcn.platform.dbankcloud.cn"
		},
		"ml":{
			"mlservice_url":"ml-api-dra.ai.dbankcloud.com,ml-api-dra.ai.dbankcloud.cn"
		}
	},
	"region":"SG",
	"configuration_version":"3.0"
};