# RPGUser

##结构
- 玩家User -> 英雄Hero -> 装备Equipment -> 宝石Jewel

---------------------------------
##结构说明
###玩家
- 战斗力为手下英雄的战斗力总合

---------------------------------
###英雄
- 基本属性：等级、力量、敏捷、智力
- 高级属性：最大生命值、攻击力

> 最大生命值 = 等级 * 智力 *10
> 攻击力 = 等级 * 力量 * 敏捷 * 10 

---------------------------------
###装备
- 基本属性：基础攻击力、爆出率、磨损度
- 高级属性：攻击力

> 攻击力 = 基础攻击力 / 爆出率 * 磨损度 * 10 
---------------------------------
###宝石
- 基本属性：基础攻击力、纯度
- 高级属性：攻击力

> 攻击力 = 基础攻击力 / 纯度 * 10