package com.sunflower.bean;

import java.util.Date;

/**
 * Created by yanggavin on 14/12/24.
 */
public class Relationship {
    /**
     * 用户id
     */
    private int userId;
    /**
     * 伙伴id
     */
    private int friendId;
    /**
     * 伙伴关系状态
     */
    private String status;
    /**
     * 伙伴最近更新信息时间
     */
    private Date friendInfoUpdatedTime;

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public int getFriendId() {
        return friendId;
    }

    public void setFriendId(int friendId) {
        this.friendId = friendId;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Date getFriendInfoUpdateTime() {
        return friendInfoUpdatedTime;
    }

    public void setFriendInfoUpdateTime(Date friendInfoUpdateTime) {
        this.friendInfoUpdatedTime = friendInfoUpdateTime;
    }
}
