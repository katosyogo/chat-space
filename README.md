# Chat-Space DB設計図
## usersテーブル
|Column|Type|Options|
|------|----|-------|
|email|string|null: false|
|password|string|null: false|
|name|string|null: false|
## Association
- has_many :groups
- has_many :comments
- has_many :users_groups
- has_many :gropes, through: :users_groups

## commentsテーブル
|Column|Type|Options|
|------|----|-------|
|text|text|null: false|
|user_id|integer|null: false, foreing_key: true|
|phote|img|null: false|
## Association
- belongs_to :group
- belongs_to :user

## groupテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|chatmember|string|null: false|
## Association
- has_many :user
- has_many :users_groups
- belongs_to :comment
- has_many :users, through: :users_groups

## users_groupsテーブル
|Clumn|Type|Options|
|-----|----|-------|
|group_id|integer|null: false, foreign_key: ture|
|user_id|integer|null: false, foreign_key: ture|
## Association
- belongs_to :group
- belongs_to :user