---
title: 性能党狂喜！🚀 Vmrack 美国三网优化小钢炮 (AMD EPYC)
published: 2026-01-08
description: 'AMD EPYC 罗马处理器加持，流媒体全解锁，这台机器难道是六边形战士？'
image: ''
tags: [VPS, 测评, Vmrack, AMD, 优化线路]
category: '折腾记录'
draft: false
lang: ''
---

# 暴力美学：AMD EPYC 驾到 💪

如果说之前的机器是吃线路的老本，那今天这台 **Vmrack** 就是完全的 **性能野兽**！
搭载了 **AMD EPYC-Rome (罗马)** 处理器，而且是 **三网精品优化** 线路。

## 📊 硬件跑分 (Hardware Benchmark)

这数据，看着就让人神清气爽：

```yaml
Basic System Information:
---------------------------------
Uptime     : 23 days, 21 hours, 47 minutes
Processor  : AMD EPYC-Rome Processor
CPU cores  : 2 @ 2595.122 MHz
AES-NI     : ✔ Enabled
RAM        : 1.9 GiB
Disk       : 50.3 GiB
IPv4/IPv6  : ✔ Online / ❌ Offline

fio Disk Speed Tests (Mixed R/W 50/50):
---------------------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
Read       | 144.85 MB/s  (36.2k) | 1.27 GB/s    (19.8k)
Write      | 145.23 MB/s  (36.3k) | 1.27 GB/s    (19.9k)
Total      | 290.08 MB/s  (72.5k) | 2.55 GB/s    (39.8k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
Read       | 1.33 GB/s     (2.5k) | 1.34 GB/s     (1.3k)
Write      | 1.40 GB/s     (2.7k) | 1.43 GB/s     (1.4k)

Geekbench 5 Benchmark Test:
---------------------------------
Single Core     | 974                           
Multi Core      | 1332                          
Full Test       | https://browser.geekbench.com/v5/cpu/24023318

SysBench CPU 测试 (Fast Mode)
---------------------------------
 1 线程测试(单核)得分:          1504 Scores
 2 线程测试(多核)得分:          2407 Scores
```

## 🌐 网络与 IP 质量

虽然写着是美国，但这延迟快得不像话：

```yaml
########################################################################
                       IP质量体检报告：154.53.*.*
########################################################################
一、基础信息
ASN:        AS46783
组织:       EL
城市:       华盛顿特区 (实际物理位置可能在西海岸)
IP类型:     原生IP 

二、Risk Score (风险值)
IPQS:       75 | 可疑IP (虽然有点高，但解锁没问题)
Scamalytics: 0 | 低风险

五、流媒体解锁
TikTok:     ✅ 解锁
Netflix:    ✅ 解锁
Disney+:    ✅ 解锁
Youtube:    ✅ 解锁
ChatGPT:    ✅ 解锁

########################################################################
                          网络质量体检报告
------------------------------------------------------------------------
四、三网TCP大包延迟
沪 132ms | 苏 138ms | 浙 139ms | 皖 146ms
(平均延迟都在 130-140ms 之间，非常优秀的优化线路)

五、三网回程路由
北京 电信    Unknown -> NoData  
地理路径：美国    自治系统路径：AS46783 
 1      20.35ms  154.53.*.*   AS46783    美国 加利福尼亚州 埃尔塞贡多 easylinkserver.com
```

## 💡 爱音の点评

1.  **AMD EPYC 就是强**
    - 单核近 1000 分，SysBench 1500 分。相比于普通的小鸡，这已经是 **生产力级别** 的性能了。
    - 硬盘读写 **2.7GB/s**？！你这是把 SSD 插在 CPU 上了吗？

2.  **延迟黑科技**
    - 虽然 IP 注册地写着华盛顿（美国东岸），但看路由和延迟（130ms 至上海），这妥妥的是 **洛杉矶 (Los Angeles) 或者 圣何塞 (San Jose)** 的机器。
    - 这条线路叫 **"三网精品优化"**，实测下来确实没有虚标，晚高峰应该也很稳。

3.  **解锁全绿但有小瑕疵**
    - 流媒体全部解锁，但 IPQS 给出了 75 的风险分。也就是说，可能不太适合注册一些极度敏感的账号，但拿来看剧、上 ChatGPT 毫无压力。

**结论**：六边形战士！
要性能有 AMD，要网络有优化线路，要娱乐有全解锁。
如果不纠结那个 IPQS 分数，这绝对是我的主力机候选！
