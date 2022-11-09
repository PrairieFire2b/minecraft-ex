import * as server from "@minecraft/server";
import { BeforeFlintIgniteEventSignal } from "./BeforeFlintIgniteEvent";
import { BeforePlayerFishEventSignal } from "./BeforePlayerFish";
import { BeforePlayerSleepEventSignal } from "./BeforePlayerSleep";
import { CrystalExplodeTriggerEventSignal } from "./CrystalExplodeTriggerEvent";
import { EntityDieEventSignal } from "./EntityDieEvent";
import { PlayerDieEventSignal } from "./PlayerDieEvent";
import { PlayerFishEventSignal } from "./PlayerFishEvent";
import { PlayerShootEventSignal } from "./PlayerShootEvent";
import { PlayerSwitchDimensionEventSignal } from "./PlayerSwitchDimensionEvent";
import { EventSignal, TriggerEventSignal } from "./types";

export class Events {
    [eventName: string | keyof server.Events]: EventSignal | Function;
    readonly beforeChat = server.world.events.beforeChat;
    readonly beforeDataDrivenEntityTriggerEvent = server.world.events.beforeDataDrivenEntityTriggerEvent;
    readonly beforeExplosion = server.world.events.beforeExplosion;
    readonly beforeFlintIgnite = new BeforeFlintIgniteEventSignal;
    readonly beforeItemDefinitionEvent = server.world.events.beforeItemDefinitionEvent;
    readonly beforeItemUse = server.world.events.beforeItemUse;
    readonly beforeItemUseOn = server.world.events.beforeItemUseOn;
    readonly beforePistonActivate = server.world.events.beforePistonActivate;
    readonly beforePlayerFish = new BeforePlayerFishEventSignal;
    readonly beforePlayerSleep = new BeforePlayerSleepEventSignal;
    readonly blockBreak = server.world.events.blockBreak;
    readonly blockExplode = server.world.events.blockExplode;
    readonly blockPlace = server.world.events.blockPlace;
    readonly buttonPush = server.world.events.buttonPush;
    readonly chat = server.world.events.chat;
    readonly dataDrivenEntityTriggerEvent = server.world.events.dataDrivenEntityTriggerEvent;
    readonly effectAdd = server.world.events.effectAdd;
    readonly entityCreate = server.world.events.entityCreate;
    readonly entityDie = new EntityDieEventSignal;
    readonly entityHit = server.world.events.entityHit;
    readonly entityHurt = server.world.events.entityHurt;
    readonly explosion = server.world.events.explosion;
    readonly itemCompleteCharge = server.world.events.itemCompleteCharge;
    readonly itemDefinitionEvent =server.world.events.itemDefinitionEvent;
    readonly itemReleaseCharge = server.world.events.itemReleaseCharge;
    readonly itemStartCharge = server.world.events.itemStartCharge;
    readonly itemStartUseOn = server.world.events.itemStartUseOn;
    readonly itemStopCharge = server.world.events.itemStopCharge;
    readonly itemStopUseOn = server.world.events.itemStopUseOn;
    readonly itemUse = server.world.events.itemUse;
    readonly itemUseOn = server.world.events.itemUseOn;
    readonly leverActivate = server.world.events.leverActivate;
    readonly messageReceive = server.world.events.messageReceive;
    readonly pistonActivate = server.world.events.pistonActivate;
    readonly playerDie = new PlayerDieEventSignal;
    readonly playerFish = new PlayerFishEventSignal;
    readonly playerJoin = server.world.events.playerJoin;
    readonly playerLeave = server.world.events.playerLeave;
    readonly playerShoot = new PlayerShootEventSignal;
    readonly playerSwitchDimension = new PlayerSwitchDimensionEventSignal;
    readonly projectileHit = server.world.events.projectileHit;
    readonly tick = server.world.events.tick;
    readonly weatherChange = server.world.events.weatherChange;
    readonly worldInitialize = server.world.events.worldInitialize;
    registerEventSignal<T extends EventSignal>(eventName: string, eventSignal: T) {
        if(!(eventName in this)) this[eventName] = eventSignal;
    }
}

export class TriggerEvents {
    [eventName: string]: TriggerEventSignal | Function;
    readonly crystalExplode = new CrystalExplodeTriggerEventSignal;
    registerEventSignal<T extends TriggerEventSignal>(eventName: string, eventSignal: T) {
        if(!(eventName in this)) this[eventName] = eventSignal;
    }
}
