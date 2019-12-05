# Chat-Space DB設計図
## usersテーブル
|Column|Type|Options|
|------|----|-------|
|email|string|null: false|
|password|string|null: false|
|username|string|null: false|
## Association
- has_many :gropes
- has_many :commnts
- has_many :users_gropes
- has_many :gropes, through: :usera_groups

## commentsテーブル
|Column|Type|Options|
|------|----|-------|
|text|text|null: false|
|user_id|integer|null: false, foreing_key: true|
|phote|img|null: false|
## Association
- belongs_to :grope
- belongs_to :user

## gropeテーブル
|Column|Type|Options|
|------|----|-------|
|gropename|string|null: false|
|chatmember|string|null: false|
## Association
- has_many :user
- has_many :users_gropes
- belongs_to :comment
- has_many :users, through: :users_gropes

## users_gropesテーブル
|Clumn|Type|Options|
|-----|----|-------|
|grope_id|integer|null: false, foreign_key: ture|
|user_id|integer|null: false, foreign_key: ture|
## Association
- belongs_to :grope
- belongs_to :user