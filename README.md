# Chat-Space DB設計図
## usersテーブル
|Column|Type|Options|
|------|----|-------|
|email|string|null: false|
|password|string|null: false|
|name|string|null: false|
## Association
- has_many :comments
- has_many :users_groups
- has_many :groups, through: :users_groups

## commentsテーブル
|Column|Type|Options|
|------|----|-------|
|text|text|
|user_id|integer|null: false, foreing_key: true|
|group_id|integer|null: false, foreing_key: true|
|image|string|
## Association
- belongs_to :group
- belongs_to :user

## groupテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
## Association
- has_many :users_groups
- has_many :comments
- has_many :users, through: :users_groups

## users_groupsテーブル
|Clumn|Type|Options|
|-----|----|-------|
|group_id|integer|null: false, foreign_key: ture|
|user_id|integer|null: false, foreign_key: ture|
## Association
- belongs_to :group
- belongs_to :user